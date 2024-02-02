import React, { useEffect } from 'react'

export default function Section2() {

    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        let interval = 2500;
    
        const startCounterOnIntersection = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const counterElement = entry.target;
              let startValue = 0;
              let endValue = parseInt(counterElement.getAttribute('data-target'));
              let duration = Math.floor(interval / endValue);
              let counter = setInterval(() => {
                startValue += 1;
                counterElement.textContent = startValue;
                if (startValue >= endValue) {
                  clearInterval(counter);
                }
              }, duration);
              observer.unobserve(counterElement);
            }
          });
        };
    
        const observer = new IntersectionObserver(startCounterOnIntersection, {
          threshold: 0.2,
        });
    
        counters.forEach((counterElement) => {
          observer.observe(counterElement);
        });
    
        return () => {
          observer.disconnect();
        };
      }, []);

    return (
        <div className='section2'>
            <div className='section2-heading1 fade-in'>
                <h1 className='heading1'>Leader in Airline Representation and Cargo Services</h1>
            </div>
            <div className='section2-para1 fade-in'>
                <p className='para1'>
                    Established in 1985, Group Concorde has been an avant garade customised and tailor made solutions provider to Airlines with more than 3 decades of experience in Airline Representation (GSSA).
                </p>
            </div>
            <div className='section2-subHeading fade-in'>
                <h2 className='subHeading'>A GLANCE AT GROUP CONCORDE</h2>
            </div>
            <div className="hr">
                <hr /><hr /><hr /><hr />
            </div>
            <div className="counterUp fade-in">
                <div className="counter-container1">
                    <div className="counter" data-target="35"></div>
                    <span className="counterTxt">YEARS OF EXPERIENCE</span>
                </div>
                <div className="counter-container2">
                    <div className="counter" data-target="18"></div>
                    <span className="counterTxt">INTERNATIONAL OFFICES</span>
                </div>
                <div className="counter-container3">
                    <div className="counter" data-target="430"></div>
                    <span className="counterTxt">STRONG TEAM</span>
                </div>
                <div className="counter-container4">
                    <div className="counter" data-target="430"></div>
                    <span className="counterTxt">STRONG TEAM</span>
                </div>
            </div>
            <div className="section2-heading2 fade-in">
                <h1 className="heading2">Our Solutions</h1>
            </div>
            <div className="section2-para2 fade-in">
                <p className='para2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates saepe dolores, dicta atque quod tempora totam rerum fugiat at velit ipsa necessitatibus ipsum omnis perspiciatis? Minima iste cumque corrupti saepe.</p>
            </div>
        </div>
    )
}
