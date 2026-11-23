from pathlib import Path
p=Path('/mnt/data/fac_work/facilities.html')
s=p.read_text(encoding='utf-8')
start=s.index('    <section class="section-sm" id="food">')
end=s.index('    <section class="section-sm">', start)
new=r'''    <section class="section-sm" id="food">
        <div class="container">
            <div class="facility-menu-card">
                <div class="facility-menu-head">
                    <div>
                        <span class="eyebrow">FOOD AT THE ELITE STAY PG & HOSTEL</span>
                        <h2>Sample Weekly Menu</h2>
                        <p>Select a day to preview our rotational homely vegetarian meals.</p>
                    </div>
                    <div class="menu-day-tabs" role="tablist" aria-label="Weekly menu days">
                        <button type="button" class="menu-day active" data-menu-day="mon" role="tab" aria-selected="true">Mon</button>
                        <button type="button" class="menu-day" data-menu-day="tue" role="tab" aria-selected="false">Tue</button>
                        <button type="button" class="menu-day" data-menu-day="wed" role="tab" aria-selected="false">Wed</button>
                        <button type="button" class="menu-day" data-menu-day="thu" role="tab" aria-selected="false">Thu</button>
                        <button type="button" class="menu-day" data-menu-day="fri" role="tab" aria-selected="false">Fri</button>
                        <button type="button" class="menu-day" data-menu-day="sat" role="tab" aria-selected="false">Sat</button>
                        <button type="button" class="menu-day" data-menu-day="sun" role="tab" aria-selected="false">Sun</button>
                    </div>
                </div>
                <div class="menu-meals" data-menu-panel>
                    <article class="menu-meal breakfast">
                        <span>BREAKFAST • 7:30–9:30 AM</span>
                        <strong data-menu-breakfast>Aloo Paratha with Curd, Pickle & Hot Tea</strong>
                    </article>
                    <article class="menu-meal lunch">
                        <span>LUNCH / COLLEGE TIFFIN • 12:30–2:30 PM</span>
                        <strong data-menu-lunch>Rajma Masala, Jeera Rice, Seasonal Sabzi, 4 Rotis & Salad (Tiffin Ready)</strong>
                    </article>
                    <article class="menu-meal dinner">
                        <span>DINNER • 8:00–10:00 PM</span>
                        <strong data-menu-dinner>Dal Tadka, Aloo Gobhi, Steamed Rice & Hot Tawa Phulkas</strong>
                    </article>
                </div>
                <div class="tiffin-service">
                    <div class="tiffin-icon"><i class="fa-solid fa-bag-shopping" aria-hidden="true"></i></div>
                    <div>
                        <h3>Morning College & Office Tiffin Service</h3>
                        <p>Have early lectures at Knowledge Park or office shifts? Drop your clean tiffin box at the kitchen counter in the morning and pick up hot, freshly packed lunch before you leave!</p>
                    </div>
                    <a class="btn btn-outline" href="https://wa.me/919319800234?text=Hello%20The%20Elite%20Stay%20PG%20%26%20Hostel%2C%20I%20want%20to%20confirm%20the%20food%20menu%20and%20tiffin%20timings." target="_blank" rel="noopener">Confirm Menu &amp; Timings</a>
                </div>
            </div>
        </div>
    </section>

    <section class="section-sm facility-service-section">
        <div class="container">
            <div class="section-head">
                <div>
                    <span class="eyebrow">SERVICE STANDARDS</span>
                    <h2>Quick Service &amp; Daily Hygiene Promise</h2>
                    <p>Consistent upkeep and responsive on-site care so you can stay focused on your classes and career.</p>
                </div>
            </div>
            <div class="service-standard-grid">
                <article class="service-standard-card">
                    <div class="service-standard-icon"><i class="fa-solid fa-sparkles" aria-hidden="true"></i></div>
                    <h3>Daily Housekeeping</h3>
                    <p>Scheduled room sweeping, floor mopping, garbage clearance, and regular sanitization of attached and common washrooms.</p>
                </article>
                <article class="service-standard-card">
                    <div class="service-standard-icon"><i class="fa-solid fa-wrench" aria-hidden="true"></i></div>
                    <h3>Quick Maintenance Support</h3>
                    <p>Responsive on-site support for AC servicing, plumbing, Wi-Fi, geyser, washing machine, or electrical needs.</p>
                </article>
                <article class="service-standard-card">
                    <div class="service-standard-icon"><i class="fa-solid fa-bolt" aria-hidden="true"></i></div>
                    <h3>24×7 Power Backup &amp; RO Water</h3>
                    <p>Reliable backup for lights, fans and Wi-Fi, plus 24×7 purified RO drinking water for residents.</p>
                </article>
            </div>
        </div>
    </section>

    <section class="section facility-comforts-section">
        <div class="container">
            <div class="section-head">
                <div>
                    <span class="eyebrow">ADDITIONAL COMFORTS</span>
                    <h2>More Everyday Amenities Included</h2>
                    <p>Tap any amenity chip below to see how it supports your daily stay at The Elite Stay PG &amp; Hostel.</p>
                </div>
            </div>
            <div class="amenity-chip-panel">
                <div class="facility-amenity-chips" role="tablist" aria-label="Additional amenities">
                    <button type="button" class="facility-amenity-chip active" data-amenity="wifi">High-Speed Wi-Fi</button>
                    <button type="button" class="facility-amenity-chip" data-amenity="backup">24×7 Power Backup</button>
                    <button type="button" class="facility-amenity-chip" data-amenity="cctv">CCTV Surveillance</button>
                    <button type="button" class="facility-amenity-chip" data-amenity="housekeeping">Daily Housekeeping</button>
                    <button type="button" class="facility-amenity-chip" data-amenity="fridge">Common Refrigerator</button>
                    <button type="button" class="facility-amenity-chip" data-amenity="lift">Lift Access</button>
                    <button type="button" class="facility-amenity-chip" data-amenity="bike">Bike Parking</button>
                    <button type="button" class="facility-amenity-chip" data-amenity="common">Clean Common Areas</button>
                    <button type="button" class="facility-amenity-chip" data-amenity="geyser">24×7 Geyser</button>
                    <button type="button" class="facility-amenity-chip" data-amenity="markets">Nearby Markets (Jagat Farm)</button>
                    <button type="button" class="facility-amenity-chip" data-amenity="washing">Washing Machine</button>
                </div>
                <div class="facility-amenity-detail" aria-live="polite">
                    <span class="facility-info-icon"><i class="fa-solid fa-info" aria-hidden="true"></i></span>
                    <p><strong data-amenity-title>High-Speed Wi-Fi:</strong> <span data-amenity-description>Reliable high-speed internet access for online classes, work, calls and entertainment.</span></p>
                </div>
            </div>
        </div>
    </section>
'''
s=s[:start]+new+s[end:]
p.write_text(s,encoding='utf-8')
