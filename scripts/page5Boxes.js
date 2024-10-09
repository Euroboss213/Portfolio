const all = document.getElementById('all');
const supp = document.getElementById('supp');
const webdes = document.getElementById('webdes');
const webdev = document.getElementById('webdevs');
const adm = document.getElementById('adm');

let box = document.getElementById('box'); // "box" refers to .boxes

let allbox = `
    <div class="pattern1">
        <div class="box1" id="wd1"></div>
        <div class="box2" id="supp1"></div>
    </div>
    <div class="pattern2" id="pat2">
        <div class="box3" id="ad1"></div>
        <div class="box4" id="wdev1"></div>
    </div>
    <div class="pattern1">
        <div class="box5" id="wd3"></div>
        <div class="box6" id="ad2"></div>
    </div>
    <div class="pattern2">
        <div class="box7" id="wdev2"></div>
        <div class="box8" id="wd2"></div>
    </div>
    <div class="pattern2">
        <div class="box9" id="wd4"></div>
        <div class="box10" id="wdev3"></div>
    </div>
`;

let suppbox = `
    <div class="pattern1">
        <div class="box1" id="supp1"></div>
    </div>
`;

let webdesbox = `
    <div class="pattern1">
        <div class="box1" id="wd1"></div>
        <div class="box2" id="wd2"></div>
    </div>
    <div class="pattern2" id="pat2">
        <div class="box3" id="wd3"></div>
        <div class="box4" id="wd4"></div>
    </div>
`;

let webdevbox = `
    <div class="pattern1">
        <div class="box1" id="wdeb1"></div>
        <div class="box2" id="wdev2"></div>
    </div>
    <div class="pattern2" id="pat2">
        <div class="box3" id="wdev3"></div>
    </div>
`;

let admbox = `
    <div class="pattern1">
        <div class="box1" id="adm1"></div>
        <div class="box2" id="adm2"></div>
    </div>
`;

function allboxex(group) {
    box.innerHTML = group;
    adjustLayout(mediaQuery); // Call the adjustLayout function to reapply correct styles
}

function allboxex(group) {
    box.innerHTML = group;
    adjustLayout(mediaQuery); // Call the adjustLayout function to reapply correct styles
}

function adjustLayout(mediaQuery) {
    if (mediaQuery.matches) {
        // If screen width is 600px or less, set width to 85%
        box.style.width = "90%"; 
        box.style.flexDirection = "row"; // Stack vertically for smaller screens
        document.querySelectorAll('.pattern1, .pattern2').forEach(pattern => {
            pattern.style.width = "75%"; // Set boxes to 75% width for small screens
        });
    } else {
        // Default layout for larger screens
        box.style.width = "70%"; // Width for larger screens
        box.style.flexDirection = "row"; // Keep side by side for larger screens
        
        // Set specific widths for larger screens
        document.querySelectorAll('.pattern1').forEach(pattern => {
            pattern.style.width = "57%"; // Set width of pattern1 to 57%
        });
        
        document.querySelectorAll('.pattern2').forEach(pattern => {
            pattern.style.width = "43%"; // Set width of pattern2 to 43%
        });
    }
    box.style.justifyContent = "center"; // Center the boxes horizontally
    box.style.alignItems = "start"; // Center the boxes vertically
}

// Function to reset colors of all category buttons
function resetButtonColors() {
    all.style.color = "#09B9C2";
    supp.style.color = "#09B9C2";
    webdes.style.color = "#09B9C2";
    webdev.style.color = "#09B9C2";
    adm.style.color = "#09B9C2";
}

// Add listeners for button clicks
all.addEventListener('click', function() {
    allboxex(allbox);
    box.style.width = "70%"; // Width for 'all' category
    // Set active category color
    all.style.color = "#F89700";
    supp.style.color = "#09B9C2";
    webdes.style.color = "#09B9C2";
    webdev.style.color = "#09B9C2";
    adm.style.color = "#09B9C2";
    
    // Reapply the layout styles for smaller screens
    adjustLayout(mediaQuery);
});

webdev.addEventListener('click', function() {
    allboxex(webdevbox);

    if (mediaQuery.matches) {
        box.style.width = "70%";
    } else {
        box.style.width = "30%"; // Width for 'webdev' category
    }
    // Set active category color
    all.style.color = "#09B9C2";
    supp.style.color = "#09B9C2";
    webdes.style.color = "#09B9C2";
    webdev.style.color = "#F89700";
    adm.style.color = "#09B9C2";
});

webdes.addEventListener('click', function() {
    allboxex(webdesbox);
    if (mediaQuery.matches) {
        box.style.width = "70%";
    } else {
        box.style.width = "30%"; // Width for 'webdev' category
    } // Width for 'webdes' category
    // Set active category color
    all.style.color = "#09B9C2";
    supp.style.color = "#09B9C2";
    webdes.style.color = "#F89700";
    webdev.style.color = "#09B9C2";
    adm.style.color = "#09B9C2";
});

adm.addEventListener('click', function() {
    allboxex(admbox);
    if (mediaQuery.matches) {
        box.style.width = "50%";
    } else {
        box.style.width = "30%"; // Width for 'webdev' category
    } // Width for 'adm' category
    // Set active category color
    all.style.color = "#09B9C2";
    supp.style.color = "#09B9C2";
    webdes.style.color = "#09B9C2";
    webdev.style.color = "#09B9C2";
    adm.style.color = "#F89700";
});

supp.addEventListener('click', function() {
    allboxex(suppbox);
    if (mediaQuery.matches) {
        box.style.width = "50%";
    } else {
        box.style.width = "30%"; // Width for 'webdev' category
    } // Width for 'supp' category
    // Set active category color
    all.style.color = "#09B9C2";
    supp.style.color = "#F89700";
    webdes.style.color = "#09B9C2";
    webdev.style.color = "#09B9C2";
    adm.style.color = "#09B9C2";
});


// Match media query
const mediaQuery = window.matchMedia('(max-width: 600px)');
adjustLayout(mediaQuery); // Call function at run time
mediaQuery.addListener(adjustLayout); // Attach listener function on state changes
