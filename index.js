'use strict';

let MENU = [
    {
        name: 'Oogii',
        section: 'oogii',
        state: 'not_active'
    },
    {
        name:  'Bio',
        section: 'bio',
        state: 'active'
    },
    {
        name:  'Portfolio',
        section: 'portfolio',
        state: 'not_active'
    },
    {
        name:  'Contact',
        section: 'contact',
        state: 'not_active'
    }
]

function selectActive() {
    for(let i = 0; i < MENU.length; i++){
        if(MENU[i].state === 'active'){
            $(`.nav_${MENU[i].section}`).addClass('active');
        } else {
            $(`.nav_${MENU[i].section}`).removeClass('active');
        }
    }
}

function setState(updateState){
    for(let i = 0; i < MENU.length; i++){
        if(MENU[i].name === updateState) {
            MENU[i].state = 'active'
        } else {
            MENU[i].state = 'not_active'
        }
    }
}

function scroll(){
    $('nav').on('click', '.menu', function(event){
        let selLink = $(event.target).text();
        if (selLink === 'Bio' || selLink === 'Oogii'){
            $('html, body').animate({
                scrollTop: $('section.bio').offset().top
                }, 700)
        } else if (selLink === 'Portfolio'){
            $('html, body').animate({
                scrollTop: $('section.portfolio').offset().top
            }, 700)
        } else if (selLink === 'Contact'){
            $('html, body').animate({
                scrollTop: $('section.contact').offset().top
            }, 700)
        }
        setState(selLink);
        selectActive()
    });
}

$(scroll);