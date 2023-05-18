<template>
    <div>
        <div class="container-xxl bg-white p-0">
            <!-- Spinner Start -->
            <!-- <div id="spinner"
                class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div> -->
            <!-- Spinner End -->


            <!-- Navbar & Hero Start -->
            <div class="container-xxl position-relative p-0">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" class="navbar-brand p-0">
                        <h1 class="text-primary m-0"><i class="fa fa-utensils me-3"></i>Restoran</h1>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0 pe-4">
                            <a href="/kasir" class="nav-item nav-link">Home</a>
                            <a href="/transaksi" class="nav-item nav-link">transaction</a>
                            <a href="/ongoing" class="nav-item nav-link ">On Going</a>
                            <a href="/history" class="nav-item nav-link active">History</a>
                            <!-- <a href="/menu" class="nav-item nav-link">Menu</a> -->
                        </div>
                    </div>
                </nav>

                <div class="container-xxl py-5 bg-dark hero-header mb-5">
                    <div class="container text-center my-5 pt-5 pb-4">
                        <h1 class="display-3 text-white mb-3 animated slideInDown">History</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center text-uppercase">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Service</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <!-- Navbar & Hero End -->

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="section-title ff-secondary text-center text-primary fw-normal mb-4">On Going</h5>
                    </div>
                    <!-- <input type="number" class="form-control mb-4" v-model="cari_history" placeholder="Cari data history.."
                        autocomplete="off"> -->

                    <div class="card mb-3" v-for="history in history" :key="history.id_history">
                        <div class="card-header">
                            {{ history.tgl_transaksi }}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Pembeli : <b> {{ history.nama_pelanggan }}</b></h5>
                            <a href="#" class="btn btn-outline-dark" data-bs-toggle="modal"
                                @click="getselecthistory(history)" data-bs-target="#detailhistory">Detail</a>
                        </div>
                    </div>


                </div>
            </div>


            <!-- Footer Start -->
            <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                            <a class="btn btn-link" href="">About Us</a>
                            <a class="btn btn-link" href="">Contact Us</a>
                            <a class="btn btn-link" href="">Reservation</a>
                            <a class="btn btn-link" href="">Privacy Policy</a>
                            <a class="btn btn-link" href="">Terms & Condition</a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                            <h5 class="text-light fw-normal">Monday - Saturday</h5>
                            <p>09AM - 09PM</p>
                            <h5 class="text-light fw-normal">Sunday</h5>
                            <p>10AM - 08PM</p>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div class="position-relative mx-auto" style="max-width: 400px;">
                                <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text"
                                    placeholder="Your email">
                                <button type="button"
                                    class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="copyright">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a class="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                                <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                                Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a><br><br>
                                Distributed By <a class="border-bottom" href="https://themewagon.com"
                                    target="_blank">ThemeWagon</a>
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                <div class="footer-menu">
                                    <a href="">Home</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer End -->

            <!-- Detail History -->
            <div class="modal fade" id="detailhistory" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table class="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Kasir</th>
                                        <th>Nama</th>
                                        <th>Jumlah</th>
                                        <th>Harga</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(history, nomor) in detail" :key="history.id_history">
                                    <td>{{ nomor + 1 }}</td>
                                    <td>{{ history.nama }}</td>
                                    <td>{{ history.nama_pelanggan}}</td>
                                    <td>{{ history.total_pesanan }}</td>
                                    <td>{{ history.total_harga}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            history: {},
            detail: {}
        }
    },
    mounted() {
        this.gethistory()
    },
    methods: {
        gethistory() {
            axios.get('http://localhost:8000/api/history')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.history = data
                    }
                )
        },
       
        getselecthistory(history) {
            axios.get('http://localhost:8000/api/history/' + history.id_pelayanan)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.detail = data
                    }
                )
        }
    }
}
</script>

