export default {
    methods: {
        //CALL API DISTRICT
        async callApiDistrict(id) {
            const res = await this.$axios.get('/common/getDistrictByProvince?province_id=' + id)
            if (res.status == 200) {
                return res.data.district
            }
        },

        //CALL API WARD
        async callApiWard(id) {
            const res = await this.$axios.get('/common/getWardByDistrict?district_id=' + id)
            if (res.status == 200) {
                return res.data.ward
            }
        },
        async getListBank() {
            await this.$axios.get('/common/getListBank')
            .then(res=>{
                this.listBank = res.data.bank
            })
        },
        ///generateYearList 
        generateYearList() {
            const currentYear = new Date().getFullYear();
            const startYear = 1900
            const endYear = currentYear;

            for (let year = startYear; year <= endYear; year++) {
                this.years.push(year);
            }
        },

        //FormatNumber
        formatNumber(value) {
            return value.replace(/[^0-9]/g, "")
        },

        //Show Password 
        showPassword(value) {
            if (value == 'password') {
                return 'text'
            } else {
                return 'password'
            }
        },

        // Show auction time left
        startCountdown(duration) {
            let endTime = this.$moment.utc().valueOf() + duration - 25200000;
            let interval = setInterval(() => {
                let timeLeft = Math.round((endTime - this.$moment.utc().valueOf()));
                if (timeLeft < 0) {
                    clearInterval(interval);
                    timeLeft = 0;
                }
                this.timeLeft = timeLeft;
            });
        },

        formatTime(time, type) {
            let hours = Math.floor(time / (1000 * 60 * 60));
            let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((time % (1000 * 60)) / (1000));
            if (type == 'hour') {
                return (
                    (hours < 10 ? '0' + hours : hours) + ' giờ       ' +
                    (minutes < 10 ? '0' + minutes : minutes) + ' phút       ' +
                    (seconds < 10 ? '0' + seconds : seconds) + ' giây '
                );
            } else {
                return (
                    (hours < 10 ? '0' + hours : hours) + ':' +
                    (minutes < 10 ? '0' + minutes : minutes) + ':' +
                    (seconds < 10 ? '0' + seconds : seconds)
                );
            }
        },

        //CHANGE PATH
        changePath(name, title, path) {
            window.history.pushState(name, title, path);
        },

        formateTime(time, format) {
            if (!format) {
                return new Date(time).toLocaleString('en-GB', { timeZone: 'UTC' }).replace(',', "")
            }else{
                return this.$moment.utc(time).format(format)
            }
        },
        formateDate(time){
            return this.$moment.utc(time).format("DD/MM/YYYY")
        },
        handleError() {
            event.target.src = require('@/assets/images/th.jpg');
        },

        encode(id) {
            return btoa(id);
        },

        decode(id) {
            return parseInt(atob(id));
        },

        reloadPage() {
            window.location.reload()
        },
        formatCount(count){
            if (count > 1000) {
                return (count / 1000).toFixed(1) + "k"
            }else{
                return count
            }
        },
        formatpreNumber(number) {
            if (number < 10) {
                return '0' + number
            } else {
                return number
            }
        },
        getInformation(){
            let infomation = {
                address:{},
                app_store: {},
                auction_guide: {},
                auction_rules: {},
                cetificate: {},
                company_introduction: {},
                company_name: {},
                dispute_settlement_mechanism: {},
                document_user_manual: {},
                email: {},
                end_time: {},
                google_play: {},
                infomation: {},
                normative_documents: {},
                operating_regulations: {},
                phone: {},
                position: {},
                privacy_policy: {},
                repre: {},
                represent: {},
                start_time: {},
                tax: {},
                website: {},
            }
            this.$axios.get('/common/getInfomation')
            .then(res=>{
                res.data.forEach(element => {
                    infomation[element.type] = element
                });
            })
            return infomation
        }
    },
};
