document.addEventListener('click',function(e){
    if(!e.target.classList.contains('active') && e.target.classList.contains('day')){
        if(document.getElementsByClassName('active')[0] === undefined){
            e.target.classList.add('active');
        }
        document.getElementsByClassName('active')[0].classList.remove('active');
        if(document.getElementsByClassName('active')[0] === undefined){
            e.target.classList.add('active');
        }
        e.target.classList.add('active');
    } else if(e.target.classList.contains('active')===null &&
e.target.classList.contains('day')){
        e.target.classList.add('active');
    }
 });

//handles new Event form
 let newEvent = {
    // day: parseInt(event.innerHTML),
    desc: document.querySelector('#new-event-desc'),
    month: headerMonths,
    year: headerYears,
    active: document.getElementsByClassName('active'),
    submit: ()=>{
        if(newEvent.desc.value.length===0) {
            newEvent.desc.classList.add('error');
            newEvent.desc.style.border='4px solid red';
        } else {
            newEventJson(newEvent.desc.value, newEvent.month.innerHTML, newEvent.year.innerHTML, newEvent.active[0].innerHTML);
            hideShowEventsDiv();
            showEventText(newEvent.desc.value);
            newEvent.desc.classList.remove('error');
            newEvent.desc.style.border='none';
            newEvent.clear();
        }
    },
    clear: ()=>{
        newEvent.desc.value='';
    }
 };

 const hideShowEventsDiv = ()=> {
     let eventsDiv = document.querySelector('.events');
     let newEventForm = document.querySelector('.new-event-form');
     let saveEventButton = document.querySelector('.submit-event');
     let showEventForm = document.querySelector('.show-event-form');

     if(eventsDiv.classList.contains('hidden')){
         //show Events
        newEventForm.classList.add('hidden');
        newEventForm.classList.remove('visible');
        eventsDiv.classList.remove('hidden');
        eventsDiv.classList.add('visible');
        showEvents();
        //change rotate class for Event listener
        saveEventButton.classList.remove('rotate');
        showEventForm.classList.add('rotate');
     } else {
         //show new Event Form
        eventsDiv.classList.remove('visible');
        eventsDiv.classList.add('hidden');
        newEventForm.classList.remove('hidden');
        newEventForm.classList.add('visible');
        showEventForm.classList.remove('rotate');
        saveEventButton.classList.add('rotate');
     }
 }

 //Submit form and show event or new event form
 document.addEventListener('click', (e)=>{
    e.preventDefault();
    if(e.target.classList.contains('rotate') &&
e.target.classList.contains('submit-event')){
        newEvent.submit();
    } else if(e.target.classList.contains('rotate')) {
        hideShowEventsDiv();
    }
 });

//color the events on the calendar
function showEvents () {
    let days = document.getElementsByClassName('day');
    let events = [];
    [...eventData['events']].forEach((event)=>{
        [...days].forEach((day)=>{
            if(event['day']===day.innerHTML &&
event['month']===headerMonths.innerHTML &&
event['year']===headerYears.innerHTML){
                day.classList.add('active-event');
                events.push(event)
            }
        });
    });
    return events;
}

//clears previous event Text
function clearEventText() {
    if(document.getElementsByClassName('event-desc')){
        [...document.getElementsByClassName('event-desc')].forEach((event)=>{
            event.outerHTML='';
        });
    }
}

//shows eventText
function showEventText(desc) {

    let noEvents = document.getElementsByClassName('no-Events')[0];
    let eventsDescContainer = document.querySelector('.events');

        //span element to put Event text into
        const span = document.createElement('span');
        let EventText = document.createTextNode(desc);;

        //delete button for span
        const remove = document.createElement('div');
        let x = document.createTextNode('x');
        remove.appendChild(x);
        remove.classList.add('remove');

        //clear previous events message
        noEvents.classList.remove('show');
        noEvents.style.display='none';

        //append to container
        span.appendChild(EventText)
        span.appendChild(remove);
        span.classList.add('event-desc', 'event-message');
        eventsDescContainer.appendChild(span);
}

//compares eventData array values to date of day clicked on
const checkEvents = (obj, date)=>{
    let isInArray = eventData['events'].find(event => event[obj]===date)
    return isInArray;
}

// //handler to show text from eventData array
document.addEventListener('click', (e)=> {
    let noEvents = document.getElementsByClassName('no-Events')[0];

    if(e.target.classList.contains('day')){
        //Clear previous event Text
        clearEventText();

        if(eventData.events.length===0){
            noEvents.style.display='initial';
            noEvents.innerHTML = `There are no events on
${headerMonths.innerHTML} ${e.target.innerHTML}
${headerYears.innerHTML}`;
        } else {
            [...eventData['events']].forEach((event)=>{
                if(event['day']===e.target.innerHTML &&
event['month']===headerMonths.innerHTML &&
event['year']===headerYears.innerHTML){

                    //show event Text
                    showEventText(event['description']);

                }  else if(!checkEvents('year',headerYears.innerHTML)
|| !checkEvents('month', headerMonths.innerHTML) ||
!checkEvents('day', e.target.innerHTML))  {
                    clearEventText();
                    noEvents.style.display='initial';
                    noEvents.innerHTML = `There are no events on
${headerMonths.innerHTML} ${e.target.innerHTML}
${headerYears.innerHTML}`;
                }
            });
        }
    }
});

//click on x to remove event
document.addEventListener('click', (x)=>{
    //day clicked on
    let day = document.getElementsByClassName('active')[0];
    let noEvents = document.getElementsByClassName('no-Events')[0];

    if(x.target.classList.contains('remove')){
        let eventText = x.target.parentNode.textContent.slice(0,-1);

        for(var i = eventData.events.length-1; i >= 0; --i) {
            if(eventData.events[i]['day']===day.innerHTML &&
eventData.events[i]['month']===headerMonths.innerHTML &&
eventData.events[i]['year']===headerYears.innerHTML &&
eventData.events[i]['description']===eventText){
                eventData.events.splice(i,1);
                //remove event clicked on from view
                x.target.parentNode.classList.add('swingHide');
                setInterval(()=>{
                    x.target.parentNode.outerHTML='';
                },500);
                //if no events on day selected show message
                if(!checkEvents('year',headerYears.innerHTML) ||
!checkEvents('month', headerMonths.innerHTML) || !checkEvents('day',
day.innerHTML)){
                    setTimeout(()=>{
                        noEvents.style.display='initial';
                    },600)
                    noEvents.innerHTML = `There are no events on
${headerMonths.innerHTML} ${day.innerHTML} ${headerYears.innerHTML}`;
                    day.classList.remove('active-event');
                }
                //if events on day selected show them
                if(checkEvents('year',headerYears.innerHTML) &&
checkEvents('month', headerMonths.innerHTML) & checkEvents('day',
day.innerHTML)){
                    showEventText(eventData.events[i].description);
                }
            }
        }
    }
});
