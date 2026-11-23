
/* The Elite Stay PG & Hostel frontend interactions. Replace CONFIG values with verified contact details. */
const CONFIG = {
  whatsappNumber: "919319800234", // Add country code + number only, e.g. 91XXXXXXXXXX
  phoneDisplay: "9319800234",
  email: "theelitestaypghostel@gmail.com",
  address: "The Elite Stay PG & Hostel, A-6, Beta 1 Block A Rd, Near Gate No 1, Near Jagat Farm, Beta I, Greater Noida, Uttar Pradesh 201310"
};
const ELITE_STAY_LAT = "28.4769706";
const ELITE_STAY_LNG = "77.5034043";
const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=" + ELITE_STAY_LAT + "," + ELITE_STAY_LNG;
document.querySelectorAll("[data-directions]").forEach(a => a.href = directionsUrl);
document.querySelectorAll("[data-address]").forEach(el => el.textContent = CONFIG.address);
document.querySelectorAll("[data-phone]").forEach(el => el.textContent = CONFIG.phoneDisplay);
document.querySelectorAll("[data-email]").forEach(el => el.textContent = CONFIG.email);
document.querySelectorAll("[data-phone-link]").forEach(a => a.href = "tel:" + CONFIG.phoneDisplay.replace(/\D/g,""));
document.querySelectorAll("[data-map]").forEach(frame => {
  frame.src = "https://maps.google.com/maps?q=" + ELITE_STAY_LAT + "," + ELITE_STAY_LNG + "&z=17&output=embed";
});


// Mobile app-style bottom navigation. Desktop navigation remains unchanged.
if (window.matchMedia("(max-width: 767px)").matches && !document.querySelector(".mobile-app-nav")) {
  const currentPage = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const mobileNav = document.createElement("nav");
  mobileNav.className = "mobile-app-nav";
  mobileNav.setAttribute("aria-label", "Mobile app navigation");
  const items = [
    ["index.html", "Home", "fa-solid fa-house"],
    ["rooms.html", "Rooms", "fa-solid fa-bed"],
    ["facilities.html", "Facilities", "fa-solid fa-wifi"],
    ["gallery.html", "Gallery", "fa-solid fa-images"],
    ["contact.html", "Contact", "fa-solid fa-phone"]
  ];
  mobileNav.innerHTML = items.map(([href, label, icon]) => {
    const pageHref = href.split("#")[0];
    const active = currentPage === pageHref && label !== "Book Now" ? " active" : "";
    return `<a href="${href}" class="${active.trim()}"${active ? ' aria-current="page"' : ""}><i class="${icon}" aria-hidden="true"></i><span>${label}</span></a>`;
  }).join("");
  document.body.appendChild(mobileNav);
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if(menuToggle && navLinks){menuToggle.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{navLinks.classList.remove("open");menuToggle.setAttribute("aria-expanded","false")}));}

document.querySelectorAll(".faq-question").forEach(btn=>btn.addEventListener("click",()=>{const item=btn.closest(".faq-item");item.classList.toggle("open");btn.setAttribute("aria-expanded",String(item.classList.contains("open")));}));

document.querySelectorAll("[data-room-filter]").forEach(btn=>btn.addEventListener("click",()=>{const filter=btn.dataset.roomFilter;document.querySelectorAll("[data-room-filter]").forEach(b=>b.classList.toggle("active",b===btn));document.querySelectorAll("[data-room-card]").forEach(card=>{card.hidden=filter!=="all" && card.dataset.roomCard!==filter;});}));

document.querySelectorAll("[data-gallery-filter]").forEach(btn=>btn.addEventListener("click",()=>{const filter=btn.dataset.galleryFilter;document.querySelectorAll("[data-gallery-filter]").forEach(b=>b.classList.toggle("active",b===btn));document.querySelectorAll("[data-gallery-category]").forEach(card=>{card.hidden=filter!=="all" && card.dataset.galleryCategory!==filter;});}));


const modalBackdrop = document.querySelector("#roomModal");

function openRoomDetailsModal() {
  if (!modalBackdrop) return;

  modalBackdrop.classList.add("show");
  modalBackdrop.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeRoomDetailsModal() {
  if (!modalBackdrop) return;

  modalBackdrop.classList.remove("show");
  modalBackdrop.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

if (modalBackdrop) {
  document.querySelectorAll("[data-room-details]").forEach(btn => {
    btn.addEventListener("click", () => {
      const roomName = btn.dataset.roomDetails || btn.closest("[data-room-card]")?.querySelector("h3")?.textContent || "Room";
      const slug = roomName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      sessionStorage.setItem("eliteStaySelectedRoom", roomName);
      location.href = `property.html?room=${encodeURIComponent(slug)}`;
    });
  });

  modalBackdrop.querySelectorAll("[data-modal-close]").forEach(button => {
    button.addEventListener("click", closeRoomDetailsModal);
  });
  modalBackdrop.addEventListener("click", event => {
    if (event.target === modalBackdrop) closeRoomDetailsModal();
  });
}

/* Auto-rotate room-card images every 5 seconds on every page that contains room cards. */
const ROOM_MEDIA = {
  "4 Seater Room": [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=85"
  ],
  "3 Seater Room": [
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=85"
  ],
  "2 Seater Room": [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=85"
  ],
  "1 Seater Room": [
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=85"
  ]
};

document.querySelectorAll("[data-room-card]").forEach(card => {
  const title = card.querySelector("h3")?.textContent.trim();
  const images = ROOM_MEDIA[title];
  const img = card.querySelector(".card-image img");
  if (!images || !img) return;
  let index = images.indexOf(img.src) >= 0 ? images.indexOf(img.src) : 0;
  img.src = images[index];
  img.dataset.roomAutoImage = "true";
  setInterval(() => {
    index = (index + 1) % images.length;
    img.classList.add("room-image-fade");
    setTimeout(() => {
      img.src = images[index];
      img.classList.remove("room-image-fade");
    }, 180);
  }, 5000);
});

/* Property detail page: four images + a compact room-tour video and complete room information. */
const propertyRoot = document.querySelector("[data-property-page]");
if (propertyRoot) {
  const params = new URLSearchParams(location.search);
  const requested = params.get("room") || "4-seater-room";
  const roomBySlug = {
    "4-seater-room": {name:"4 Seater Room", price:"₹6,000", type:"Shared room", furnishing:"Furnished", preference:"Any", description:"Comfortable shared accommodation with essential facilities, suitable for students and working professionals.", images:ROOM_MEDIA["4 Seater Room"]},
    "3-seater-room": {name:"3 Seater Room", price:"₹8,000", type:"Shared room", furnishing:"Furnished", preference:"Any", description:"A practical three-seater setup with a comfortable layout, Wi-Fi and everyday living essentials.", images:ROOM_MEDIA["3 Seater Room"]},
    "2-seater-room": {name:"2 Seater Room", price:"₹9,000", type:"Shared room", furnishing:"Furnished", preference:"Any", description:"A comfortable two-seater room designed for privacy, convenience and a clean living experience.", images:ROOM_MEDIA["2 Seater Room"]},
    "1-seater-room": {name:"1 Seater Room", price:"₹11,000", type:"Private room", furnishing:"Furnished", preference:"Any", description:"A private furnished room option for residents who prefer their own personal space and comfort.", images:ROOM_MEDIA["1 Seater Room"]}
  };
  const room = roomBySlug[requested] || roomBySlug["4-seater-room"];
  const gallery = propertyRoot.querySelector("[data-property-gallery]");
  if (gallery) gallery.innerHTML = room.images.map((src,i)=>`<img src="${src}" alt="${room.name} - image ${i+1}" loading="lazy">`).join("");
  propertyRoot.querySelector("[data-property-title]").textContent = room.name;
  propertyRoot.querySelector("[data-property-price]").innerHTML = `${room.price}<small> / month</small>`;
  propertyRoot.querySelector("[data-property-type]").textContent = room.type;
  propertyRoot.querySelector("[data-property-furnishing]").textContent = room.furnishing;
  propertyRoot.querySelector("[data-property-preference]").textContent = room.preference;
  propertyRoot.querySelector("[data-property-description]").textContent = room.description;
  propertyRoot.querySelector("[data-property-book]")?.addEventListener("click",()=>{
    sessionStorage.setItem("eliteStaySelectedRoom", room.name);
    location.href = "contact.html#contact-form";
  });
}


const lightbox=document.querySelector("#lightbox");
let lightboxItems=[],lightboxIndex=0;
function showLightbox(index){if(!lightbox)return;lightboxItems=[...document.querySelectorAll("[data-lightbox]:not([hidden])")];lightboxIndex=(index+lightboxItems.length)%lightboxItems.length;const item=lightboxItems[lightboxIndex];const img=item.querySelector("img");lightbox.querySelector("img").src=img.src;lightbox.querySelector("img").alt=img.alt;lightbox.querySelector("[data-lightbox-caption]").textContent=item.dataset.caption||img.alt;lightbox.classList.add("show");}
document.querySelectorAll("[data-lightbox]").forEach(item=>item.addEventListener("click",()=>{lightboxItems=[...document.querySelectorAll("[data-lightbox]:not([hidden])")];showLightbox(lightboxItems.indexOf(item));}));
if(lightbox){lightbox.querySelectorAll("[data-lightbox-close]").forEach(b=>b.addEventListener("click",()=>lightbox.classList.remove("show")));lightbox.querySelector("[data-lightbox-prev]")?.addEventListener("click",()=>showLightbox(lightboxIndex-1));lightbox.querySelector("[data-lightbox-next]")?.addEventListener("click",()=>showLightbox(lightboxIndex+1));lightbox.addEventListener("click",e=>{if(e.target===lightbox)lightbox.classList.remove("show")});}
document.addEventListener("keydown",e=>{if (e.key === "Escape") {
  lightbox?.classList.remove("show");
  closeRoomDetailsModal();
}
if(lightbox?.classList.contains("show")&&e.key==="ArrowRight")showLightbox(lightboxIndex+1);if(lightbox?.classList.contains("show")&&e.key==="ArrowLeft")showLightbox(lightboxIndex-1);});

/* Room-card enquiry popup + Formspree submission */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xoednvnb";

function createInquiryModal() {
  if (document.querySelector("#roomInquiryModal")) return document.querySelector("#roomInquiryModal");
  const wrap = document.createElement("div");
  wrap.className = "modal-backdrop inquiry-modal";
  wrap.id = "roomInquiryModal";
  wrap.setAttribute("aria-hidden", "true");
  wrap.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="roomInquiryTitle">
      <button class="modal-close" type="button" data-inquiry-close aria-label="Close">×</button>
      <div class="modal-content">
        <span class="eyebrow">ROOM ENQUIRY</span>
        <h2 id="roomInquiryTitle">Book Your Room</h2>
        <p class="muted">Send your details and The Elite Stay PG & Hostel will contact you.</p>
        <form id="roomInquiryForm" action="${FORMSPREE_ENDPOINT}" method="POST">
          <input type="hidden" name="_subject" value="The Elite Stay PG & Hostel - Room Enquiry">
          <input type="hidden" name="source" value="Room Card Enquiry">
          <div class="form-grid">
            <div class="field"><label for="inquiryName">Full Name *</label><input id="inquiryName" name="name" autocomplete="name" required placeholder="Enter your name"></div>
            <div class="field"><label for="inquiryPhone">Phone Number *</label><input id="inquiryPhone" name="phone" type="tel" autocomplete="tel" required pattern="[0-9+() -]{8,20}" placeholder="Enter phone number"></div>
            <div class="field"><label for="inquiryEmail">Email</label><input id="inquiryEmail" name="email" type="email" autocomplete="email" placeholder="you@example.com"></div>
            <div class="field"><label for="inquiryRoom">Room Type *</label><select id="inquiryRoom" name="roomType" required><option value="">Select room type</option><option>4 Seater Room</option><option>3 Seater Room</option><option>2 Seater Room</option><option>1 Seater Room</option></select></div>
            <div class="field"><label for="inquiryMoveDate">Expected Move-in Date</label><input id="inquiryMoveDate" name="moveDate" type="date"></div>
            <div class="field"><label for="inquiryOccupants">Number of Occupants</label><select id="inquiryOccupants" name="occupants"><option value="">Select</option><option>1</option><option>2</option><option>3</option><option>4</option></select></div>
            <div class="field full"><label for="inquiryMessage">Message</label><textarea id="inquiryMessage" name="message" placeholder="Any requirement or question..."></textarea></div>
          </div>
          <div class="form-actions">
            <button class="btn btn-outline" type="button" data-inquiry-cancel>Cancel</button>
            <button class="btn" type="submit" data-inquiry-submit>Send Enquiry ↗</button>
          </div>
          <div class="notice" data-inquiry-notice role="status" aria-live="polite"></div>
        </form>
      </div>
    </div>`;
  document.body.appendChild(wrap);
  return wrap;
}

const roomCards = document.querySelectorAll("[data-room-card]");
if (roomCards.length) {
  const inquiryModal = createInquiryModal();
  const inquiryForm = inquiryModal.querySelector("#roomInquiryForm");
  const inquiryNotice = inquiryModal.querySelector("[data-inquiry-notice]");
  const inquiryRoom = inquiryModal.querySelector("[name=roomType]");

  const closeInquiry = () => {
    inquiryModal.classList.remove("show");
    inquiryModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  const openInquiry = (roomName = "") => {
    if (roomName && inquiryRoom) inquiryRoom.value = roomName;
    if (inquiryNotice) {
      inquiryNotice.style.display = "none";
      inquiryNotice.textContent = "";
    }
    inquiryModal.classList.add("show");
    inquiryModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    setTimeout(() => inquiryModal.querySelector("[name=name]")?.focus(), 50);
  };

  document.querySelectorAll("[data-room-submit]").forEach(btn => {
    btn.addEventListener("click", () => openInquiry(btn.dataset.roomSubmit || ""));
  });

  inquiryModal.querySelector("[data-inquiry-close]")?.addEventListener("click", closeInquiry);
  inquiryModal.querySelector("[data-inquiry-cancel]")?.addEventListener("click", closeInquiry);
  inquiryModal.addEventListener("click", e => { if (e.target === inquiryModal) closeInquiry(); });

  inquiryForm?.addEventListener("submit", async e => {
    e.preventDefault();
    if (!inquiryForm.reportValidity()) return;

    const submitBtn = inquiryForm.querySelector("[data-inquiry-submit]");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(inquiryForm),
        headers: { Accept: "application/json" }
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.errors?.map(x => x.message).join(", ") || `Submission failed (${response.status})`);

      inquiryNotice.style.display = "block";
      inquiryNotice.textContent = "Thank you! Your enquiry has been sent successfully.";
      inquiryForm.reset();
      setTimeout(closeInquiry, 1200);
    } catch (error) {
      inquiryNotice.style.display = "block";
      inquiryNotice.textContent = error.message || "Network error. Please try again.";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Enquiry ↗";
    }
  });
}

const inquiryForm=document.querySelector("#inquiryForm");
if(inquiryForm){
  inquiryForm.setAttribute("action", FORMSPREE_ENDPOINT);
  inquiryForm.setAttribute("method", "POST");
  const roomSelect=inquiryForm.querySelector('[name="roomType"]');
  const chosen=sessionStorage.getItem("eliteStaySelectedRoom");
  if(chosen&&roomSelect){const match=[...roomSelect.options].find(o=>o.text.toLowerCase().includes(chosen.toLowerCase().replace(" room","")));if(match)roomSelect.value=match.value;sessionStorage.removeItem("eliteStaySelectedRoom");}
  const notice=inquiryForm.querySelector(".notice");

  inquiryForm.addEventListener("submit", async e=>{
    e.preventDefault();
    if(!inquiryForm.reportValidity())return;
    const button=inquiryForm.querySelector("[data-submit-demo]");
    button.disabled=true;
    button.textContent="Sending...";
    notice.style.display="none";
    try{
      const response=await fetch(FORMSPREE_ENDPOINT,{
        method:"POST",
        body:new FormData(inquiryForm),
        headers:{Accept:"application/json"}
      });
      const result=await response.json().catch(()=>({}));
      if(!response.ok)throw new Error(result.errors?.map(x=>x.message).join(", ")||`Submission failed (${response.status})`);
      notice.style.display="block";
      notice.textContent="Thank you! Your inquiry has been sent successfully.";
      inquiryForm.reset();
    }catch(error){
      notice.style.display="block";
      notice.textContent=error.message||"Network error. Please check your internet and try again.";
    }finally{
      button.disabled=false;
      button.textContent="Submit Inquiry";
    }
  });

  inquiryForm.querySelector("[data-send-whatsapp]")?.addEventListener("click",e=>{e.preventDefault();if(!inquiryForm.reportValidity())return;if(!CONFIG.whatsappNumber){notice.style.display="block";notice.textContent="WhatsApp is not configured yet. Add the real WhatsApp number in js/main.js before using this button.";return;}const d=Object.fromEntries(new FormData(inquiryForm).entries());
  const message=`The Elite Stay PG & Hostel Inquiry\n\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email||"Not provided"}\nRoom: ${d.roomType}\nMove-in: ${d.moveDate||"Not specified"}\nOccupants: ${d.occupants||"Not specified"}\nMessage: ${d.message||"No message"}`;
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,"_blank","noopener");
  });
}



// Floating WhatsApp button on every page. Add a real number in CONFIG first.
document.querySelectorAll("[data-floating-whatsapp]").forEach(link=>{
  link.addEventListener("click",event=>{
    event.preventDefault();
    if(!CONFIG.whatsappNumber){
      alert("WhatsApp is not configured yet. Please add The Elite Stay PG & Hostel's real WhatsApp number in js/main.js (CONFIG.whatsappNumber).");
      return;
    }
    const msg="Hello The Elite Stay PG & Hostel, I would like to know about room availability, pricing and facilities.";
    window.open("https://wa.me/"+CONFIG.whatsappNumber+"?text="+encodeURIComponent(msg),"_blank","noopener");
  });
});
