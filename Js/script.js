// // alert('you hav entered');
// /*submit.addEventListener( 'click', function(){ document.querySelectorAll    ('.output-message')[0].innerText = document.querySelectorAll("#name")[0].innerText});
// undefined*/

// let input_name = document.getElementById('name');

// let submit_btn = document.getElementById('submit');

// submit_btn.click(function () { alert(input_name); })


// let input_insert = input_name.value;
// // let input_insert = input_name.innerHTML;

// submit.addEventListener('click', function () {
//     alert('hello' + input_insert);
// })


$('document').ready(function () {
    $('#submit').click(function () {
        const name_inserted = $('#name').val();
        alert('Hello ' + name_inserted);
        const age_inserted = $('#age').val();
        if (age_inserted <= 0) {
            const name_inserted = $('#name').val();
            alert(name_inserted + ' age should not be 0 or less any negative integer')
        }
        else {
            const age_inserted = $('#age').val();
            const DOB_inserted = $('#date').val();
            const name_inserted = $('#name').val();
            $('p').text('😍 Cool ' + name_inserted + ' your age is ' + age_inserted + ' also your date of birth is ' + DOB_inserted + ' 😍');
            console.log('correct value inserted');
            console.log('😍');
        }
        const DOB_inserted = $('#date').val();
        if (DOB_inserted = false) {
            alert('Please insert the date also');
        } else {
            console.log('DOB inserted');
        }
    })
})
