var g = G$('John', 'Doe');

//var selectedLang = $('#lang option:selected').text();

//console.log(selectedLang)
//g.greet().setLang('en').greet(true).log();

//g.HTMLGreeting('#greeting',true);

//click event on login button
//use our object on click of the button
$('#login').click(function () {
    //Retireve text of selected option
    var selectedLang = $('#lang option:selected').text();

    //set lang according to English or Spanish value
    if(selectedLang === 'English')
        g.setLang('en');
    else
        g.setLang('es');

        //use chainable methods
        g.HTMLGreeting('#greeting', true).log();
});