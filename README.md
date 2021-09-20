##CONSOLE APP FOR WORKING WITH JSON file

##STACK
  - node.js
  - TypeScript
  - Commander
 ### Description
    If you wand to use this app you have to opne console in main derecory. 
    Then you can using the command yarn start with action

*  Get all contacts:

    > yarn start -a list
    
    > ![ListContact][idL]                  
                         
    
*  Get contact by ID
    
    > yarn start -a get -id 5
    
    > ![getContactById][idG]        
       
*  Add contact 
    
    > yarn start -a add -n name -e email@email.com -p 45654784
    
    > ![getContactById][idA]     
 
*  Remove contact by Id 
     
     > yarn start -a remove -i 5
     
     > ![getContactById][idR]      
  
### If you want to change this application you have to work in SRC directory

*
    > You can use ***yarn dev*** script
    
    > after making changes, run the script ***yarn build***
  
  [idL]: /Screen/list.png "example"
  [idG]: /Screen/get.png "example"
  [idR]: /Screen/remove.png "example"
  [idA]: /Screen/add.png "example"