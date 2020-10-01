$(function(){
    $('.content-box').click(function(){
        $('.content-box').animate({
            width: '500px',
            height: '350px',
           }, 1000)
        $('.content-after').slideDown().animate({
            opacity:1
        }, 1000)
        $('.content-before').css({
            'background-color' : 'darkcyan',
            'color': 'white'

        })
    })

    //Showing password 
    let viewPass =false;
    $('#hide-pass').click(function(){
        if(viewPass === false){
            $('#password_input').attr('type','text');
            $('#hide-pass').removeClass('fa-eye');
            $('#hide-pass').addClass('fa-eye-slash');
            viewPass = true;
        }else{
            $('#password_input').attr('type', 'password');
            $('#hide-pass').addClass('fa-eye');
            $('#hide-pass').removeClass('fa-eye-slash');
            viewPass = false;
        }

    })

    $('.btn-submit').click(e => {
        e.preventDefault();
        let errors = [];
        let email = $('#email_input');
        let pwd = $('#password_input');
        if(email.val() === ''){
            email.parent().addClass('error');
            errors.push('email is required');
        }else{
            email.parent().removeClass('error');
        }

        if(pwd.val() === ''){
            pwd.parent().addClass('error');
            errors.push('password is required');
        }else{
            pwd.parent().removeClass('error');
        }

        $('.error-message').hide();
        if(errors.length > 0){
            for(const err of errors){
                let msg = $('<p></p>').text(err).css({
                    'font-size':'12px',
                    'color':'red',
                    'margin':0

                }).addClass('error-message');

                if(err.includes('email')){
                    $('.input-box:first').after(msg);
                }else if(err.includes('password')){
                    $('.input-box:last').after(msg);
                }
               
            }
            errors = [];
        }
    })



})