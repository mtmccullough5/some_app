// Jquery
// General form $(selector).action
$(document).ready(function(){
    $('#plan').on('change', function(){
        var priceText = "$10.00 /mo";

        switch(this.value){
            case "monthly":
                priceText = "$30.00 /mo";
                break;
            case "quarterly":
                priceText = "$25.00 /mo";
                break;
            case "yearly":
                priceText = "$20.00 /mo";
                break;
        }
        $('#price').text(priceText)
    });    
    $('#add').on('click', function(){
        var plan = $('#plan');
        var installment = plan.val();
        var price = $('#price').text();
        var inCart = $('#incart');
        var numeric = price.replace(/[[A-Za-z$\/\s]/g, '');
        var data = 'data-price="' + numeric + '" data-plan="'+ installment +'"';
        inCart.append('<li class="entry"' + data + '>' + installment + '-' + price + '</li>');
        updateTotal();
    });

    function updateTotal() {
        var total = 0;
        $('.entry').each( function(index,entry){
            var data = $(entry).data();
            var price = parseFloat(data.price)
            var installement = data.plan;
            switch (installement) {
                case "monthly":
                    total += price;    
                    break;
                case "quarterly":
                    total += price * 3;
                    break;
                case "yearly":
                    total += price *12;
                    break;
            }
            $('#carttotal').text('$' + total)
            console.log(data)
        })
    }

});




var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    var firstname = document.getElementById('first_name');
    var lastname = document.getElementById('last_name');
    var list = document.getElementById('people'); 
    var li = document.createElement('li');
    li.innerHTML = lastname.value + ', ' + firstname.value;
    list.appendChild(li);
    firstname.value = "";
    lastname.value = "";
});


console.log("ItWorks")