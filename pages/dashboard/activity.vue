<template>
    <section class="container-fluid p-4">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
                <div class="border-bottom pb-3 mb-3 d-lg-flex justify-content-between align-items-center">
                    <div class="mb-3 mb-lg-0">
                        <h1 class="mb-0 h2 fw-bold">List of participants</h1>
                    </div>
                    <div class="d-flex">
                        <button @click="nextCombination()" class="btn btn-primary btn-sm">Next combinaison</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Start Content-->
    <div class="container-fluid">

        <div class="row">

            <div class="col-md-12">
                <div class="card">

                    <div class="card-body">
                        <DataTable v-if="!loader" :options="datatableOptions" class=" table table-striped table-sm table-bordered">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Surname</th>
                                    <th scope="col" v-if="auth.getUser.is_superuser">ID Number</th>
                                    <th scope="col">Donate</th>
                                    <th scope="col">Bank Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(item, index) in users" :key="index">

                                    <tr v-if="item.user.is_superuser || item.donations.length>0  ">
                                        <td>{{ index + 1 }}</td>
                                        <td>
                                            <a href="#" @click="getUser(item.user)" class="text-muted" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">{{ item.user.username }}</a>
                                        </td>
                                        <td>{{ item.user.surname || 'Not defined' }}</td>
                                        <td v-if="auth.getUser.is_superuser">{{ item.user.id_number || 'Not defined' }}</td>
                                        <td>€{{ 1000 - getTotalDonate(item.donations) }}</td>
                                        <td>
                                            {{ item.user.bank || 'Not defined' }}
                                        </td>


                                    </tr>
                                </template>
                            </tbody>
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas offcanvas-end bg-white shadow" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">User information</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">

                <div class="text-center">
                    <img src="/assets/images/avatar.png" class="rounded-circle avatar-xl mb-3" alt="">
                    <h4 class="mb-0">{{ currentUser?.username }}</h4>
                    <!-- <p class="mb-0"> Donation : <span v-if="getTotalDonate(user_donations)">€{{ getTotalDonate(user_donations) }} /</span> €1000</p> -->
                </div>
                <div class="d-flex justify-content-between border-bottom py-2 mt-4">
                    <span>Bank Name</span>
                    <span class="text-dark">{{ currentUser?.bank || 'Not defined' }}</span>
                </div>
                <div class="d-flex justify-content-between border-bottom py-2">
                    <span>ACC</span>
                    <span class="text-warning">
                        {{ currentUser?.acc || 'Not defined' }}
                    </span>
                </div>
                <div class="d-flex justify-content-between border-bottom py-2">
                    <span>Phone Number</span>
                    <span class="text-warning">
                        {{ currentUser?.phoneNumber || 'Not defined' }}
                    </span>
                </div>
                <div v-if="user_donations.length && isUser(user_donations).length && auth.getUser.id === isUser(user_donations)[0]?.user" class="d-flex justify-content-center pt-2">
                    <span class="text-primary h3 text-center">Donators</span>
                </div>
                <div class="mt-2" v-if="user_donations.length && isDonator(user_donations).length && isDonator(user_donations)[0].status === 'confirmed'">
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        Call <strong>{{ currentUser?.username }}</strong> to let them know that you deposite money in their account so that they can confirm.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div class="mt-4 text-center" v-if="user_donations.length && isDonator(user_donations).length">

                    <button @click="makeDonation(isDonator(user_donations)[0]?.id,true)" :disabled="isDonator(user_donations)[0]?.status === 'confirmed' || isDonator(user_donations)[0]?.status === 'received'" v-if="auth.getUser.id === isDonator(user_donations)[0]?.donator" class="btn btn-primary btn-sm rounded-pill">Donate</button>
                </div>

                <ul class="list-group" v-if="user_donations.length && isUser(user_donations).length && auth.getUser.id === isUser(user_donations)[0]?.user">
                    <li v-for="(donation, index) in user_donations" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
                        {{ donation.donator_relation.surname }}
                        <button @click="makeDonation(donation.id)" :disabled="donation.status === 'received' || donation.status === 'pending'" v-if="auth.getUser.id === donation.user_relation.id" class="btn btn-success btn-sm rounded-pill">Confirm donation (500)</button>
                    </li>
                </ul>
            </div>
        </div>

    </div>
    <!-- container -->
</template>

<script setup>
import DataTable from 'datatables.net-vue3'
import useUsers from '../../services/userService'
import DataTablesCore from 'datatables.net-bs5';
import  { onMounted } from "vue";
import Swal from "sweetalert2";

useHead({
    title: "KYD | List of participants"
})
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
})
DataTable.use(DataTablesCore);

const { users, loader, getUserDonations, user_donations, donate, getListeUsersActivity  } = useUsers()
const currentUser = ref(null)
const auth = useAuthStore();
const isNextCombinaison = ref(false)
const userDonateId =  ref(null)
// const cycleNumbers = (usersList) => {
//     // Définir la taille de la combinaison en fonction du nombre d'utilisateurs
//     let combinationSize = usersList.length >= 60 ? 10 : 3;

//     // Tant qu'il reste des utilisateurs dans la liste
//     while (usersList.length > 0) {
//         // Récupérer la prochaine combinaison d'utilisateurs
//         let currentCombination = usersList.slice(0, combinationSize);

//         // Afficher la combinaison actuelle
//         console.log("Current combination:");
//         currentCombination.forEach(user => console.log(user));

//         // Demander à l'utilisateur s'il souhaite voir la prochaine combinaison
//         let userInput
//         if (isNextCombinaison.value) userInput = prompt("Do you want to see the next combinations? (Y/N)").toUpperCase();
//         else userInput='N'

//         // Vérifier la réponse de l'utilisateur
//         if (userInput === 'Y') {
//             // Passer à la prochaine combinaison
//             usersList = usersList.slice(combinationSize);
//             isNextCombinaison.value = false

//         } else if (userInput === 'N') {
//             // Arrêter le cycle si l'utilisateur répond "N"
//             isNextCombinaison.value = false

//             break;
//         } else {
//             // Gérer une réponse invalide
//             alert("Invalid input. Please enter 'Y' or 'N'.");
//         }
//     }
// }
const nextCombination = () => {
    isNextCombinaison.value = true
    // cycleNumbers(users.value);

}
onMounted(async() => {
    await getListeUsersActivity()
    if (!loader.value) $('.pagination').addClass("pagination-sm pagination-rounded")
    // Appel de la fonction cycleNumbers avec la liste d'utilisateurs
    // cycleNumbers(users.value);

})
const getTotalDonate = (donations) => {
    const total = donations.filter(item => item.status === 'received' || item.status === 'confirmed')
    const pluck = (property) => (element) => element[property];
    const totalAmount = total.map(pluck('amount')).reduce((accumulator, currentValue) => {
        return accumulator + parseFloat(currentValue);
    }, 0);
    return totalAmount
}
const isDonator = (donations) => {
    const donation = donations.filter(item => auth.getUser.id === item.donator_relation.id)
    return donation
}
const isUser = (donations) => {
    const donation = donations.filter(item => auth.getUser.id === item.user_relation.id)
    return donation
}
const getUser = async(user) => {
    currentUser.value = user
    userDonateId.value = user.id
    await  getUserDonations(user.id)
}




const makeDonation = (id,isDonator) => {
    try {
        Swal.fire({
            title: 'Approval',
            text: `${isDonator ? 'Do you wish to make a donation?' :'Did you receive your donation into your account?'}` ,
            showCancelButton: true,
            icon: 'info',
            customClass: {
                cancelButton: 'btn btn-danger btn-sm ',
                confirmButton: 'btn btn-success btn-sm ms-2',
            },
            confirmButtonText: 'Yes',
            buttonsStyling: false,
            cancelButtonText: 'No',
            reverseButtons: true
        }).then(async result => {
            if (result.isConfirmed){ 
                await donate(id)
                await getUserDonations(userDonateId.value)
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const datatableOptions = {
    pagingType: "simple_numbers",
    processing: true,
    searching: true,
    paging: true,
    bRetrieve: true,
    bDestroy: true,
    responsive: true,
    lengthMenu: [5, 10, 25, 50, 100],
    pageLength: 10,
    drawCallback: function () {
        $('.pagination').addClass("pagination-sm pagination-rounded")
    },

};
</script>

<style>
@import 'datatables.net-bs5';
</style>
<style lang="scss">
.pagination-rounded {
    .page-link {
        border-radius: 30px !important;
        margin: 0 3px !important;
        border: none;
        width: 32px;
        height: 32px;
        padding: 0;
        text-align: center;
        line-height: 32px;
        padding-left: 10px;
        padding-right: 10px;
    }
}
</style>