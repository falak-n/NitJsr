function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}


(function(){
    const buttons=document.querySelectorAll('.btn');
    const storeImages=document.querySelectorAll('.store-item')

    buttons.forEach((button) => {
        button.addEventListener('click',(e)=>{
            e.preventDefault()
            const filter=e.target.dataset.filter

            storeImages.forEach((item)=>{
                if(filter==="all" || item.classList.contains(filter) ){
                    item.style.display="block";
                }else{
                       item.style.display = "none";
                  }
               
                
            })
        })
    })
})();

   
  /* const images=document.querySelectorAll('.store-image');
   images.forEach(image => {
    image.addEventListener('click',function(){
        const url=this.getAttribute('data-url');
        window.location.href=url;
    });
   });*/

   let companies = {
    "company7": {
        "category": "core",
        "alumni": [
            {"name": "Abhishek Gupta", "linkedin": "https://www.linkedin.com/in/abhishek-gupta-60bb781b5/", "photo": "linkd/19.png"},
            {"name": "Bablu Kumar", "linkedin": "https://www.linkedin.com/in/bablu-kumar-4169771ab/", "photo": "linkd/20.png"},
            {"name": "Nikhil Kumar", "linkedin": "https://www.linkedin.com/in/nikhil-kumar-2199961a3/", "photo": "linkd/21.png"},
            
        ]
    },
    "company8": {
        "category": "core",
        "alumni": [
            {"name": "Alumni 1", "linkedin": "https://www.linkedin.com/in/alumni1", "photo": "1.png"},
            {"name": "Alumni 2", "linkedin": "https://www.linkedin.com/in/alumni2", "photo": "alumni2.jpg"},
            {"name": "Alumni 3", "linkedin": "https://www.linkedin.com/in/alumni3", "photo": "alumni3.jpg"},
            
        ]
    },
    "company9": {
        "category": "core",
        "alumni": [
            {"name": "Alumni 1", "linkedin": "https://www.linkedin.com/in/alumni1", "photo": "1.png"},
            {"name": "Alumni 2", "linkedin": "https://www.linkedin.com/in/alumni2", "photo": "alumni2.jpg"},
            {"name": "Alumni 3", "linkedin": "https://www.linkedin.com/in/alumni3", "photo": "alumni3.jpg"},
            
        ]
    },
    
    "company4": {
        "category": "consulting",
        "alumni": [
            {"name": "Ankit Kumar", "linkedin": "https://www.linkedin.com/in/ankit-kumar-016a541b0/", "photo": "linkd/10.png"},
            {"name": "Praveen Kumar Singh", "linkedin": "https://www.linkedin.com/in/praveen-kumar-singh-52750017a/", "photo": "linkd/11.png"},
            {"name": "Ritesh Choudhary", "linkedin": "https://www.linkedin.com/in/riteshchoudhary075/", "photo": "linkd/12.png"},
            
        ]
    },
    "company5": {
        "category": "consulting",
        "alumni": [
            {"name":"Bhanu Singh", "linkedin": "https://www.linkedin.com/in/bhanu-singh-a56135193/", "photo": "linkd/13.png"},
            {"name": "Anirban Maity", "linkedin": "https://www.linkedin.com/in/anirban-maity-65b362152/", "photo": "linkd/14.png"},
            {"name": "Rishabh Rai", "linkedin": "https://www.linkedin.com/in/rishabh-rai-302944133/", "photo": "linkd/15.png"},
            
        ]
    },
    "company6": {
        "category": "consulting",
        "alumni": [
            {"name": "Saket Gupta", "linkedin": "https://www.linkedin.com/in/saket-gupta-6a91651b2/", "photo": "linkd/16.png"},
            {"name": "Sattvik Dash", "linkedin": "https://www.linkedin.com/in/sattvik-dash-177982192/", "photo": "linkd/17.png"},
            {"name": "Nilanjan Sengupta", "linkedin": "https://www.linkedin.com/in/nilanjan-sengupta-2529241b2/", "photo": "linkd/18.png"},
            
        ]
    },
    "company1": {
        "category": "non-core",
        "alumni": [
            {"name": "Gitanshu-kumar", "linkedin": "https://www.linkedin.com/in/gitanshu-kumar-a51877149/", "photo": "linkd/1.png"},
            {"name": "Prachi Jayaswal", "linkedin": "https://www.linkedin.com/in/prachi-jayaswal-ab5325193/", "photo": "linkd/2.png"},
            {"name": "Biswajeet Chatterjee", "linkedin": "https://www.linkedin.com/in/biswajeet-chatterjee09/", "photo": "linkd/3.png"},
            
        ]
    },
    "company2": {
        "category": "non-core",
        "alumni": [
            {"name": "Aditya Raj Srivastava", "linkedin": "https://www.linkedin.com/in/aditya-raj-srivastava-54128318a/", "photo": "linkd/4.png"},
            {"name": "Amrit Agarwal", "linkedin": "https://www.linkedin.com/in/amrit-agarwal-6a47661b3/", "photo": "linkd/5.png"},
            {"name": "Madhukesh Kumar", "linkedin": "https://www.linkedin.com/in/madhukesh-kumar-b9b153171/", "photo": "linkd/6.png"},
            
        ]
    },
    "company3": {
        "category": "non-core",
        "alumni": [
            {"name": "Vivek Kumar Nayak", "linkedin": "https://www.linkedin.com/in/vivekkumarnayak/", "photo": "linkd/7.png"},
            {"name": "Abhinav", "linkedin": "https://www.linkedin.com/in/abhinav-a-691b75205/", "photo": "linkd/8.png"},
            {"name": "Harshwardhan-jaiswal", "linkedin": "https://www.linkedin.com/in/harshwardhan-jaiswal-ba950b12a/", "photo": "linkd/9.png"},
            
        ]
    }
    // Add more companies as needed
};

function showAlumni(company) {
    let alumniPage = document.getElementById("alumniPage");
    let alumniCards = document.getElementById("alumniCards");
    let alumni = companies[company].alumni;

    alumniCards.innerHTML = "";
    for (let i = 0; i < alumni.length; i++) {
        let card = document.createElement("div");
        card.className = "alumni-card";
        card.innerHTML = `
            <div class="content">
                <img src="${alumni[i].photo}" alt="${alumni[i].name}"> 
                <a href="${alumni[i].linkedin}" target="_blank">${alumni[i].name}</a>
            </div>
        `;
        alumniCards.appendChild(card);
    }

    document.querySelector('.container').style.display = 'none';
    alumniPage.style.display = 'block';
}

function goBack() {
    document.querySelector('.container').style.display = 'block';
    document.getElementById("alumniPage").style.display = 'none';
}

// Initialize with showing all companies
window.onload = function() {
    filterSelection("all");
};