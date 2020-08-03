$(document).ready(function () {

    $('.datepicker-here').datepicker({
        autoClose: true
    })

const form = document.querySelector("#book-form");
const adults = document.querySelector("#adults");
const children = document.querySelector("#children");
const form1 = document.querySelector("#book-form1");
const searchBtn = document.querySelector("#form-searh");
if (form) {
    form.addEventListener("submit", EventListener);
}

function EventListener(e) {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);

}

if (form1) {
    if (localStorage.getItem("adults")) {
        const adul = parseInt(localStorage.getItem("adults"));
        const child = parseInt(localStorage.getItem("children"));
        children.value = child;
        adults.value = adul;
        searchBtn.addEventListener("click", () => {
            localStorage.removeItem('adults');
            localStorage.removeItem('children');
            children.value="";
            adults.value="";
        });
    }
}

    let checkIn = $('#check_in').datepicker({
        onSelect: function (formattedDate, date) {
            sessionStorage.setItem("checkIn", date);
        },
        onRenderCell: function (date, cellType) {
            if (cellType == 'day') {
                let today = new Date();
                today.setHours(0, 0, 0, 0);

                if (today && date <= +today + 86400000 * 3) {
                    return {
                        disabled: true
                    }
                }
            }
        },
        minDate: new Date(),
        position: 'bottom left',
    }).data('datepicker');

    let checkInDate = sessionStorage.getItem("checkIn");
    if (checkInDate !== null && checkInDate !== '') checkIn.selectDate(new Date(checkInDate));


    let checkOut = $('#check_out').datepicker({
        onSelect: function (formattedDate, date) {
            sessionStorage.setItem("checkOut", date);
        },
        onRenderCell: function (date, cellType) {
            if (cellType == 'day') {
                let today = new Date();
                today.setHours(0, 0, 0, 0);

                if (today && date <= +today + 86400000 * 3) {
                    return {
                        disabled: true
                    }
                }
            }
        },
        minDate: new Date(),
        position: 'bottom left',
    }).data('datepicker');

    let checkOutDate = sessionStorage.getItem("checkOut");
    if (checkOutDate !== null && checkOutDate !== '') checkOut.selectDate(new Date(checkOutDate));


})
