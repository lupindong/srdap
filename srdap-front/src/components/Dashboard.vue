<template>
    <section id="dashboard">
        <section class="mt-lg-2">
            <mdb-card class="card-image"
                      style="background-image: url(http://s.aigei.com/src/img/png/90/90804148243745c29bc67a52999674ca.png?imageView2/2/w/71&e=1595847600&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:_zdfD7T0ECXkdBGTHoaBp5sQH9U=); background-size: 100%">
                <div class="text-white text-center py-3 px-3 my-3">
                    <div>
                        <h1 class="card-title h1-responsive pt-3 mb-3">今日销售总额：<strong
                                style="font-size: 72px">1234567.89</strong>元</h1>
                        <span class="mx-3 mb-3">截止北京时间：{{ new Date().toLocaleString() }}</span>
                        <span class="mx-3 mb-3">移动端成交占比：88.88%</span>
                    </div>
                </div>
            </mdb-card>
        </section>
        <section class="mt-lg-4">
            <mdb-row>
                <mdb-col xl="3" md="6" class="mb-r">
                    <mdb-card cascade class="cascading-admin-card">
                        <div class="admin-up">
                            <mdb-icon icon="money-bill-alt" class="primary-color"/>
                            <div class="data">
                                <p><b style="font-size: medium">影票销售总额</b></p>
                                <h4>
                                    <strong>$2000</strong>
                                </h4>
                            </div>
                        </div>
                        <mdb-card-body>
                            <div class="progress">
                                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"
                                     class="progress-bar bg-primary" role="progressbar"
                                     style="width: 25%"></div>
                            </div>
                            <mdb-card-text>Better than last week (25%)</mdb-card-text>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
                <mdb-col xl="3" md="6" class="mb-r">
                    <mdb-card cascade class="cascading-admin-card">
                        <div class="admin-up">
                            <mdb-icon icon="film" class="warning-color"/>
                            <div class="data">
                                <p><b style="font-size: medium">影票订单总数</b></p>
                                <h4>
                                    <strong>200</strong>
                                </h4>
                            </div>
                        </div>
                        <mdb-card-body>
                            <div class="progress">
                                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"
                                     class="progress-bar bg grey darken-2" role="progressbar"
                                     style="width: 25%"></div>
                            </div>
                            <mdb-card-text>Worse than last week (25%)</mdb-card-text>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
                <mdb-col xl="3" md="6" class="mb-r">
                    <mdb-card cascade class="cascading-admin-card">
                        <div class="admin-up">
                            <mdb-icon icon="money-bill-alt" class="light-blue lighten-1"/>
                            <div class="data">
                                <p><b style="font-size: medium">卖品销售总额</b></p>
                                <h4>
                                    <strong>20000</strong>
                                </h4>
                            </div>
                        </div>
                        <mdb-card-body>
                            <div class="progress">
                                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75"
                                     class="progress-bar grey darken-2" role="progressbar"
                                     style="width: 75%"></div>
                            </div>
                            <mdb-card-text>Worse than last week (75%)</mdb-card-text>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
                <mdb-col xl="3" md="6" class="mb-r">
                    <mdb-card cascade class="cascading-admin-card">
                        <div class="admin-up">
                            <mdb-icon icon="coffee" class="red accent-2"/>
                            <div class="data">
                                <p><b style="font-size: medium">卖品订单总数</b></p>
                                <h4>
                                    <strong>2000</strong>
                                </h4>
                            </div>
                        </div>
                        <mdb-card-body>
                            <div class="progress">
                                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"
                                     class="progress-bar bg-primary" role="progressbar"
                                     style="width: 25%"></div>
                            </div>
                            <mdb-card-text>Better than last week (25%)</mdb-card-text>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
            </mdb-row>
        </section>
        <section class="mt-lg-4">
            <mdb-row>
                <mdb-col md="3" class="mb-3">
                    <mdb-card class="mb-3">
                        <mdb-card-header class="text-center">门店影票销售额排行</mdb-card-header>
                        <mdb-card-body>
                            <mdb-list-group class="list-group-flush">
                                <mdb-list-group-item action waves>1. Sales
                                    <mdb-badge color="success-color" pill class="pull-right">789
                                        <mdb-icon icon="arrow-up" class="ml-2"/>
                                    </mdb-badge>
                                </mdb-list-group-item>
                                <mdb-list-group-item action waves>2. Traffic
                                    <mdb-badge color="primary-color" pill class="pull-right">456
                                    </mdb-badge>
                                </mdb-list-group-item>
                                <mdb-list-group-item action waves>3. Orders
                                    <mdb-badge color="danger-color" pill class="pull-right">123
                                        <mdb-icon icon="arrow-down" class="ml-2"/>
                                    </mdb-badge>
                                </mdb-list-group-item>
                                <mdb-list-group-item action waves>4. Issues
                                    <mdb-badge color="primary-color" pill class="pull-right">74</mdb-badge>
                                </mdb-list-group-item>
                                <mdb-list-group-item action waves>5. Messages
                                    <mdb-badge color="primary-color" pill class="pull-right">8</mdb-badge>
                                </mdb-list-group-item>
                            </mdb-list-group>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
                <mdb-col md="6" class="mb-3">
                    <mdb-card class="mb-3">
                        <mdb-card-header class="text-center">订单实时趋势</mdb-card-header>
                        <mdb-card-body>
                            <div style="display: block">
                                <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :height="240"/>
                            </div>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
                <mdb-col md="3" class="mb-3">
                    <mdb-card class="mb-3">
                        <mdb-card-header class="text-center">门店卖品销售额排行</mdb-card-header>
                        <mdb-card-body>
                            <mdb-list-group class="list-group-flush">
                                <mdb-list-group-item action waves>1. Sales
                                    <mdb-badge color="success-color" pill class="pull-right">789
                                        <mdb-icon icon="arrow-up" class="ml-2"/>
                                    </mdb-badge>
                                </mdb-list-group-item>
                                <mdb-list-group-item action waves>2. Traffic
                                    <mdb-badge color="primary-color" pill class="pull-right">456
                                    </mdb-badge>
                                </mdb-list-group-item>
                                <mdb-list-group-item action waves>3. Orders
                                    <mdb-badge color="danger-color" pill class="pull-right">123
                                        <mdb-icon icon="arrow-down" class="ml-2"/>
                                    </mdb-badge>
                                </mdb-list-group-item>
                                <mdb-list-group-item action waves>4. Issues
                                    <mdb-badge color="primary-color" pill class="pull-right">74</mdb-badge>
                                </mdb-list-group-item>
                                <mdb-list-group-item action waves>5. Messages
                                    <mdb-badge color="primary-color" pill class="pull-right">8</mdb-badge>
                                </mdb-list-group-item>
                            </mdb-list-group>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
            </mdb-row>
        </section>
        <section class="mt-lg-2">
            <mdb-row>
                <mdb-col lg="6" class="mb-4">
                    <mdb-card>
                        <mdb-card-header class="text-center">热门影片Top10</mdb-card-header>
                        <mdb-card-body>
                            <section>
                                <mdb-row>
                                    <mdb-col md="6" class="mb-4">
                                        <table class="table table-striped">
                                            <thead>
                                            <tr>
                                                <th></th>
                                                <th>影片</th>
                                                <th>销售额</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </mdb-col>
                                    <mdb-col md="6" class="mb-4">
                                        <table class="table table-striped">
                                            <thead>
                                            <tr>
                                                <th></th>
                                                <th>影片</th>
                                                <th>销售额</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">7</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">8</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">9</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">10</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </mdb-col>
                                </mdb-row>
                            </section>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
                <mdb-col lg="6" class="mb-4">
                    <mdb-card>
                        <mdb-card-header class="text-center">热门卖品Top10</mdb-card-header>
                        <mdb-card-body>
                            <section>
                                <mdb-row>
                                    <mdb-col md="6" class="mb-4">
                                        <table class="table table-striped">
                                            <thead>
                                            <tr>
                                                <th></th>
                                                <th>卖品</th>
                                                <th>销售额</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </mdb-col>
                                    <mdb-col md="6" class="mb-4">
                                        <table class="table table-striped">
                                            <thead>
                                            <tr>
                                                <th></th>
                                                <th>卖品</th>
                                                <th>销售额</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">7</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">8</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">9</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">10</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </mdb-col>
                                </mdb-row>
                            </section>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
            </mdb-row>
        </section>
    </section>
</template>

<script>
    import {
        mdbBadge,
        mdbCard,
        mdbCardBody,
        mdbCardHeader,
        mdbCardText,
        mdbCol,
        mdbIcon,
        mdbLineChart,
        mdbListGroup,
        mdbListGroupItem,
        mdbRow,
    } from 'mdbvue'

    export default {
        name: 'Dashboard',
        components: {
            mdbRow,
            mdbCol,
            mdbCard,
            mdbCardBody,
            mdbCardHeader,
            mdbCardText,
            mdbIcon,
            mdbLineChart,
            mdbListGroup,
            mdbListGroupItem,
            mdbBadge
        },
        data() {
            return {
                lineChartData: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    datasets: [
                        {
                            label: '#1',
                            backgroundColor: 'rgba(245, 74, 85, 0.5)',
                            data: [65, 59, 80, 81, 56, 55, 40]
                        },
                        {
                            label: '#2',
                            backgroundColor: 'rgba(90, 173, 246, 0.5)',
                            data: [12, 42, 121, 56, 24, 12, 2]
                        },
                        {
                            label: '#3',
                            backgroundColor: 'rgba(245, 192, 50, 0.5)',
                            data: [2, 123, 154, 76, 54, 23, 5]
                        }
                    ]
                },
                lineChartOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: true,
                                color: 'rgba(0, 0, 0, 0.1)'
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: true,
                                color: 'rgba(0, 0, 0, 0.1)'
                            }
                        }]
                    }
                }
            }
        }
    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
    .cascading-admin-card {
        margin: 20px 0;
    }

    .cascading-admin-card .admin-up {
        margin-left: 4%;
        margin-right: 4%;
        margin-top: -20px;
    }

    .cascading-admin-card .admin-up .fas,
    .cascading-admin-card .admin-up .far {
        box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
        padding: 1.7rem;
        font-size: 2rem;
        color: #fff;
        text-align: left;
        margin-right: 1rem;
        border-radius: 3px;
    }

    .cascading-admin-card .admin-up .data {
        float: right;
        margin-top: 2rem;
        text-align: right;
    }

    .admin-up .data p {
        color: #999999;
        font-size: 12px;
    }

    .classic-admin-card .card-body {
        color: #fff;
        margin-bottom: 0;
        padding: 0.9rem;
    }

    .classic-admin-card .card-body p {
        font-size: 13px;
        opacity: 0.7;
        margin-bottom: 0;
    }

    .classic-admin-card .card-body h4 {
        margin-top: 10px;
    }
</style>
