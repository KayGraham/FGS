/**
 * Created by kaygraham123 on 1/22/14.
 */
$(function($){

    //Load landing page
    var init = function (){

        $('#loadPage').empty();
        $.get('templates/landing.html', function(htmlArg){
            var lang = $(htmlArg).find('#template_landing');

            $.template('landtemplate', lang);
            var html = $.render('', 'landtemplate');
            $('#loadPage').append(html);
        });
    };

    //Load Registration Page
    var registerPage = function (){

        $('#loadPage').empty();
        $.get('templates/register.html', function(htmlArg){
            var lang = $(htmlArg).find('#template_register');

            $.template('landtemplate', lang);
            var html = $.render('', 'landtemplate');
            $('#loadPage').append(html);
        });
    };

    //Load header
    var loadHeader = function(){
        $('#loadPage').empty();
        $('#loadHeader').empty();
        $.get('templates/header.html', function(htmlArg){
            var lang = $(htmlArg).find('#template_header');

            $.template('landtemplate', lang);
            var html = $.render('', 'landtemplate');
            $('#loadHeader').append(html);
        });
    };

    //Load projects page
    var loadProjects = function(){
        $('#loadPage').empty();
        $('#loadHeader').empty();
        $('#loadProjects').empty();
        $.get('templates/projects.html', function(htmlArg){
            var lang = $(htmlArg).find('#template_projects');

            $.template('landtemplate', lang);
            var html = $.render('', 'landtemplate');
            $('#loadHeader').append(html);
        });

    };

    //Check Log In/ Load header & projects page
    function login(){
        var username = $('.username').val();
        var pass = $('.password').val();

        $.ajax({
            url: 'xhr/login.php',
            data: {
                username: username,
                password: pass
            },
            type: 'post',
            dataType: 'json',
            success: function(response){
                console.log(response);

                if(response.user){
                    console.log('logged in');

                    $('#loadPage').empty();
                    loadHeader();
                    loadProjects();

                }else{
                    var msg = "*" + response.error;
                    $('.error').html(msg);
                }
            }
        });
    }

    //Check & Submit register page/ Load header & projects page
    function register(){
        var username = $('.username').val();
        var pass = $('.password').val();
        var email = $('.email').val();

        $.ajax({
            url: 'xhr/register.php',
            data: {
                username: username,
                password: pass,
                email: email
            },
            type: 'post',
            dataType: 'json',
            success: function(response){
                console.log(response);

                if(response.user){
                    console.log('registered');

                    $('#loadPage').empty();
                    loadHeader();
                    loadProjects();

                }else{
                    var msg = "*" + response.error;
                    $('.error').html(msg);
                }
            }
        });
    }

    //Run load fn for landing page
    init();

    //Run load fn for register page
    $('#loadPage').on('click', '.registerBtn', function(e){
        registerPage();
        return false;
    });

    //Run load fn for register page
    $('#loadPage').on('click', '.registerLink', function(e){
        registerPage();
        return false;
    });

    //Run load fn to check log in & load header & projects page
    $('#loadPage').on('click', '.logInBtn', function(e){
        login();
        return false;
    });

    //Run load fn for check form & load header & projects page
    $('#loadPage').on('click', '.submitBtn', function(e){
        register();
        return false;
    });

    //Run load fn for landing page
    $('#loadPage').on('click', '.close', function(e){
        init();
        return false;
    });

    //Run load fn for landing page
    $('#loadHeader').on('click', '.logOut', function(e){
        $('#loadPage').empty();
        $('#loadHeader').empty();
        $('#loadProjects').empty();
        console.log('logged out');
        init();
        return false;
    });

});
