These are the challenges listed in order to reproduce the Indecision app
========================================================================

1. set up components 

2. print out Title, subtitle & some options 

3. Set up static buttons 

    - what should i do 

    - removeAll

    - Set up the add option form + button

4. AddOption component - wire it up and fetch the value typed in an alert

5. add state to options & disable the what should i do button if there are no options 

6. make array empty when clicking on remove all button by creating a method as a prompt and passing it into a child component (reverses the data flow)

7. create handlePick that picks a random option from the array

    - handlePick - pass down to Action and setup onClick

8. add a new option to the list of options when clicking add option

    - handleAddOption method in parent class that gets passed down to child. (method in parent class, bind it in parent, create prop in render function and reference in child class)

9. add validation to the form. Can’t submit an empty string and can’t submit and an option twice. 

    - set up conditions in parent class

    - add new error state to AddOption class & render the error message in a paragraph

10. change class components into stateless functional components where applicable 

11. add a remove button to each option and delete the option onClick store option data in local storage 
