var countryPrefix = localStorage.getItem("urlPrefix");
document.write('\
<script>\
    document.addEventListener("DOMContentLoaded", function(){\
        var memberEmail = sessionStorage.getItem("memberEmail");\
        if(memberEmail == null || memberEmail == "") {\
            document.getElementById("menuLoggedOut").style.display = "block";\
            document.getElementById("menuLoggedIn").style.display = "none";\
        } else {\
            document.getElementById("menuLoggedOut").style.display = "none";\
            document.getElementById("menuLoggedIn").style.display = "block";\
            var welcomeText = sessionStorage.getItem("memberName");\
            if(welcomeText == "null") {\
                welcomeText = "";\
            }\
            document.getElementById("memberName").innerHTML = "Welcome " + welcomeText + "!";\
        }\
        document.getElementById("tableDeskLink").href = "/B/' + countryPrefix + '/furnitureCategory.html?cat=" + encodeURIComponent("Tables & Desks");\
        document.getElementById("bedMattressLink").href = "/B/' + countryPrefix + '/furnitureCategory.html?cat=" + encodeURIComponent("Beds & Mattresses");\
        document.getElementById("sofaChairLink").href = "/B/' + countryPrefix + '/furnitureCategory.html?cat=" + encodeURIComponent("Sofas & Chair");\
        document.getElementById("cabinetStorageLink").href = "/B/' + countryPrefix + '/furnitureCategory.html?cat=" + encodeURIComponent("Cabinets & Storage");\
        document.getElementById("retailProductLink").href = "/B/' + countryPrefix + '/retailProductsCategory.html?cat=" + encodeURIComponent("All Retail Products");\
        document.getElementById("favouritesLink").href = "/B/' + countryPrefix + '/favourites.html";\
        document.getElementById("shoppingCartLink").href = "/B/' + countryPrefix + '/shoppingCart.html";\
        document.getElementById("deliveryServiceLink").href = "/B/' + countryPrefix + '/deliveryService.html";\
        document.getElementById("assemblyServiceLink").href = "/B/' + countryPrefix + '/assemblyService.html";\
        document.getElementById("PlanningGuideAndCrewServiceLink").href = "/B/' + countryPrefix + '/PlanningGuideAndCrewService.html";\
    }, false);\
    function logout() {\
        sessionStorage.clear();\
        window.location.href = "/B/' + countryPrefix + '/memberLogin.html?goodMsg=Logout Successfully."\
    }\
<\/script>\
<header id="header">\
    <div class="container">\
        <h1 class="logo">\
            <a href="/B/' + countryPrefix + '/index.html">\
                <img alt="Island Furniture" width="180" height="80" data-sticky-width="82" data-sticky-height="40" src="../img/logo.png">\
            </a>\
        </h1>\
        <!-- Non Logged In Menu -->\
        <div id="menuLoggedOut" style="display: none;">\
            <nav>\
                <ul class="nav nav-pills nav-top">\
                    <li><a href="/B/' + countryPrefix + '/storeLocation.html"><i class="icon icon-map-marker"></i>Store Location</a></li>\
                    <li><a href="/B/' + countryPrefix + '/memberLogin.html"><i class="icon icon-unlock-alt"></i>Login/Register</a></li>\
                    <li><a id="shoppingCartLink"><i class="icon icon-shopping-cart"></i>Shopping Cart</a></li>\
                    <li><a href="/B/' + countryPrefix + '/contactUs.html"><i class="icon icon-phone"></i>Contact Us</a></li>\
                </ul>\
                <button class="btn btn-responsive-nav btn-inverse" data-toggle="collapse" data-target=".nav-main-collapse"><i class="icon icon-bars"></i></button>\
            </nav>\
        </div>\
        <!-- Logged In Menu -->\
        <div id="menuLoggedIn" style="display: none;">\
            <nav>\
                <ul class="nav nav-pills nav-top">\
                    <li><a id="memberName"></a></li>\
                    <li><a href="/B/' + countryPrefix + '/storeLocation.html"><i class="icon icon-map-marker"></i>Store Location</a></li>\
                    <li><a href="/B/' + countryPrefix + '/shoppingCart.html"><i class="icon icon-shopping-cart"></i>Shopping Cart</a></li>\
                    <li><a href="/B/' + countryPrefix + '/memberProfile.html"><i class="icon icon-user"></i>Profile</a></li>\
                    <li><a href="/B/' + countryPrefix + '/contactUs.html"><i class="icon icon-phone"></i>Contact Us</a></li>\
                    <li><a href="#" onclick="logout()"><i class="icon icon-unlock-alt"></i>Logout</a></li>\
                </ul>\
                <button class="btn btn-responsive-nav btn-inverse" data-toggle="collapse" data-target=".nav-main-collapse"><i class="icon icon-bars"></i></button>\
            </nav>\
        </div>\
    </div>\
    <div class="navbar-collapse nav-main-collapse collapse">\
        <div class="container">\
            <nav class="nav-main mega-menu">\
                <ul class="nav nav-pills nav-main" id="mainMenu">\
                    <li><a href="/B/' + countryPrefix + '/virtualStore.html">Virtual Store</a></li>\
                    <li class="dropdown">\
                        <a class="dropdown-toggle" href="#">Categories<i class="icon icon-angle-down"></i></a>\
                        <ul class="dropdown-menu">\
                            <li><a id="tableDeskLink"><i class="icon icon-table"></i> Tables & Desk</a></li>\
                            <li><a href="/B/' + countryPrefix + '/furnitureCategory.html?cat=Bathroom"><i class="icon icon-bath"></i> Bathroom</a></li>\
                            <li><a id="bedMattressLink"><i class="icon icon-bed"></i> Beds & Mattresses</a></li>\
                            <li><a id="sofaChairLink"><i class="icon icon-chair"></i> Sofas & Chair</a></li>\
                            <li><a id="cabinetStorageLink"><i class="icon icon-cabinet"></i> Cabinets & Storage</a></li>\
                            <li><a href="/B/' + countryPrefix + '/furnitureCategory.html?cat=Lightings"><i class="icon icon-light"></i> Lightings</a></li>\
                            <li><a href="/B/' + countryPrefix + '/furnitureCategory.html?cat=Study"><i class="icon icon-study"></i> Study</a></li>\
                            <li><a href="/B/' + countryPrefix + '/furnitureCategory.html?cat=Children"><i class="icon icon-child"></i> Children</a></li>\
                        </ul>\
                    </li>\
                    <li><a id="retailProductLink"><i class="icon icon-coffee"></i> Retail Products</a></li>\
                    <li><a id="favouritesLink"><i class="icon icon-heart"></i> Favourites</a></li>\
                    <li><a id="deliveryServiceLink"><i class="icon icon-truck"></i> Delivery Services</a></li>\
                    <li><a id="assemblyServiceLink"><i class="icon icon-wrench"></i> Assembly</a></li>\
                    <li><a id="PlanningGuideAndCrewServiceLink"><i class="icon icon-book"></i> Planning</a></li>\
                </ul>\
            </nav>\
        </div>\
    </div>\
</header>');

// Close the document.write function
document.write('');
