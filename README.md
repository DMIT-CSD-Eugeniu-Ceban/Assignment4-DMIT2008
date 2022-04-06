# :writing_hand: <span style="color: lightcoral;"> **Assignment 4**</span>  <span style="color: turquoise;">*(React Firebase Login Flow)*</span>
 :calendar: 8th, April 2022 <br/>
 :clock11: 11:59pm <br/>
 :package: <span style="color: red; font-weight:700">20%</span>

  - [General Info about project](#general-info)
  - [Installation](#installation)
  - [Setup](#setup)
  - [Conclusion](#conclusion)


##  :books: <span style="color:FFF3E0; font-weight:500" id="general-info">General Info</span>

&nbsp;&nbsp;&nbsp;&nbsp;This project aims to create in &nbsp; <span style="color: lightseagreen; font-weight:600; font-size: 1.2rem"> <img src="https://media4.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=ecf05e47g3cyt5km83vjjzpek9yemwmsw1uw6d14u4pdtj73&rid=giphy.gif&ct=s" width="19" title="react logo"> React &nbsp;</span> an online footwear dashboard store for men, women, and children. The name of this store is <span style="color:#EF5350; font-weight:600"><img src="./static/../src/static/logo.png" width="20" title="EC logo"> *"Shoes EC"*</span>. The structure of the web page consists of three essential elements, the navigation bar, the side bar, and the content of the page. These elements help to make it easier to control the processes performed by the user. Active links and buttons in this project that are active and can be accessed are `"Sign In"`,`"Sign Up"`,`"Add New Product"`,`"View All Products"`, and `"sign out"` which returns the user to the login page.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;This project consists of 3 active pages that allow the user to navigate only with the access of the personal email and password.
One important element of this project is `"Page 404"`, which shows the user that the request was not accessible. Finally, the main goal of this project is to implement <span style="color:#14D8D7; font-weight:700">Links</span> and <span style="color:#14D8D7; font-weight:700">Protected Routes</span> paths between pages.<br/>
This project is launched on &nbsp; <span style="color: lightseagreen; font-weight:600; font-size: 1.2rem"> <img src="https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png" width="19" title="react logo"> *Netlify* &nbsp;</span>, uses the &nbsp; <span style="color: #FF9C0B; font-weight:600; font-size: 1.2rem"> <img src="https://www.gameartguppy.com/wp-content/uploads/2019/04/mascot_firebase-logo.png" width="27" title="react logo">*Firebase* &nbsp;</span> client authentication system, and the repository can be found on the *Github* link.<br/>
Good Luck !!!

##  :computer: <span style="color:78909C; font-weight:500" id="installation">Installation</span>
1.  Install all packages/dependencies:
    - Open VSCode command line. View > Terminal
    - In the command line issue the following terminal command
```
  npm install
```
2. Run the server
     - Run the server before can be used
  ```
    npm start
  ```
3. Server will auto-run
   - wait a few seconds, the first time the server needs more time than usual.
```
  On Your Network:  http://192.168.0.16:3000  or  https://assignment3-eugeniu-ceban.netlify.app/dashboard
```

## :gear: <span style="color:81C784; font-weight:500" id="setup">Setup</span>

&nbsp;&nbsp;&nbsp;&nbsp;The use of this web page aims to meet all the expectations of our customers. It is extremely easy to control and use.
At the launch of this project, the login page with the client's <span style="color:#FF88F8; font-weight:700">email</span> and <span style="color:#9DFF79; font-weight:700">password</span> will be displayed. To access the main page of this online store it is necessary to use the email <span style="color:red; font-weight:700">"jim@home.com"</span> and the password <span style="color:#FF6969; font-weight:700">"123456"</span>. Without these elements access is forbidden. Then the user just must press the enter button and then he will be redirected to the main/dashboard page of the web page which will present all the customer's products.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;In the next section, the complete web page with the three essential elements is presented. At the top is the navigation bar with the company logo and four other buttons. Only the *`"sign out"`* button works. On the left side can be identified the sidebar menu with with the two active buttons *`"Add New Product Panel"`* and *`"View All Products Panels"`*. And finally, the product panels will be presented at the center of the page.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Of course, this project also provides the user with a `404 page` in case of errors or indefinite access. On this page, the user will be able to see the notification that he has accessed the wrong link. Also, on this page, the user will be able to access the `"Back to Login Page"` or `"Back to Dashboard"` button to get back to the login page or dashboard pages of this website.<br/>
<br/>

>## :hammer_and_wrench: New Implementation
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;In this assessment 4, I completed the product write functionality and implement the read functionality to view all products panes. The first step is to create a product and save it to the <span style="color: #FF9C0B; font-weight:600; font-size: 1.2rem"> <img src="https://www.gameartguppy.com/wp-content/uploads/2019/04/mascot_firebase-logo.png" width="27" title="react logo">Firebase &nbsp;</span> virtual database. The image of the product in the "Picture" folder will also be saved here. Also, in this assessment, I developed the default dashboard panel, which displays all products to the user. This product card will display the product image, the product price, and the product description.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;After finishing the product creation, the application will automatically provide the customer with the option to create a new product or to see all the orders created so far. The customer will be able to access the next decision by pressing the two buttons.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;The user of the dashboard has the opportunity to add a new product. To access the product editor, I provide a link in the sidebar to the "Add New Product Panel". This panel shows the loading interface for a new product along with a live preview of the product as it is created.
In this task was provided to the user with a submit button that will write the data to the Realtime Database and store the image in Firebase Storage. As soon as the submit button is clicked switch the UI using conditional rendering to show the upload/write status. When the data has been saved, update the UI to confirm to the user that data was successfully written and provided to the user the option of returning to the dashboard route.
<br/>
<br/>

## :pencil: <span style="color:CE93D8; font-weight:500" id="conclusion">Conclusion</span>
Finally, we can mention that this project is a successful one. Website offers more opportunities to our clients. This product is easy to use, navigate and has a high-quality standard.
Everything presented here aims to accomplish the mission offered to the <span style="color:#3F51B5; font-weight:700">NAIT</span> higher education institution. All copyrights are legally reserved, and the purpose of this product is to show how we can use the Firebase database.

&nbsp; 

## :label: [![Generic badge](https://img.shields.io/badge/<Assignment2>-<Open>-<COLOR>.svg)](https://app.netlify.com/sites/ec-shoes-assessment1-eugeniuceban/overview) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity) [![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/) [![Windows](https://svgshare.com/i/ZhY.svg)](https://svgshare.com/i/ZhY.svg) [![macOS](https://svgshare.com/i/ZjP.svg)](https://svgshare.com/i/ZjP.svg) [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)


[![made-with-html](https://img.shields.io/badge/Made%20with-HTML-1f425f.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![made-with-css](https://img.shields.io/badge/Made%20with-CSS-1f425f.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![made-with-Sass](https://img.shields.io/badge/Made%20with-SASS-1f425f.svg)](https://sass-lang.com/)
[![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
[![made-with-npm](https://img.shields.io/badge/Made%20with-NPM-1f425f.svg)](https://www.npmjs.com/)

[![Npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://https://npmjs.com/)
[![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)



[![GitHub forks](https://img.shields.io/github/forks/Naereen/StrapDown.js.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/Naereen/StrapDown.js/network/)
&ensp;

### 	:link: Connection
![gmail](https://aleen42.github.io/badges/src/google_plus.svg)
![reddit](https://aleen42.github.io/badges/src/reddit.svg)
![facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)
![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![windows10](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
&ensp;

### :mortar_board: Skills
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=whit)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SAAS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

&ensp;

&ensp;

#### *Personal icons*
:mortar_board:
:computer:
:lock_with_ink_pen:
:bulb:
:hammer:
:wrench:
:email:
:key:
:lock:
:mailbox_with_mail:
:black_nib:
:pencil2:
:pushpin:
:file_folder:
:calendar:
:open_file_folder:
:paperclip:
:hammer_and_wrench:
