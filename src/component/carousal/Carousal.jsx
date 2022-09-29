import React from 'react'
import '../../../src/component/carousal/carousal.css'
const slideWidth = 30;

const _items = [
    {
        player: {
            title: 'Efren Reyes'  ,
            desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
            image: 'assets/images/blog/1.jpg',
        },
    },
    {
        player: {
            title: "Ronnie O'Sullivan",
            desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
            image: 'assets/images/blog/2.jpg',
        },
    },
    {
        player: {
            title: 'Shane Van Boening',
            desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
            image: 'assets/images/blog/3.jpg',
        },
    },
    {
        player: {
            title: 'Mike Sigel',
            desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
            image: 'assets/images/blog/4.jpg',
        },
    },
    {
        player: {
            title: 'Willie Mosconi',
            desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: 'assets/images/blog/5.jpg',
        },
    },
    // {
    //     player: {
    //         title: 'Willie Mosconi',
    //         desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
    //         image: 'assets/images/blog/6.jpg',
    //     },
    // },
    // {
    //     player: {
    //         title: 'Willie Mosconi',
    //         desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
    //         image: 'assets/images/blog/7.jpg',
    //     },
    // },
    // {
    //     player: {
    //         title: 'Willie Mosconi',
    //         desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
    //         image: 'assets/images/blog/8.jpg',
    //     },
    // },

    // <div className="rs-carousel owl-carousel"
    //          data-loop="true" data-items="3"
    //          data-margin="30" data-autoplay="true"
    //          data-hoverpause="true" data-autoplay-timeout="5000"
    //          data-smart-speed="800" data-dots="false" data-nav="false"
    //          data-nav-speed="false" data-center-mode="false" data-mobile-device="1"
    //          data-mobile-device-nav="false" data-mobile-device-dots="true"
    //          data-ipad-device="2" data-ipad-device-nav="false" data-ipad-device-dots="true"
    //          data-ipad-device2="2" data-ipad-device-nav2="false" data-ipad-device-dots2="true"
    //          data-md-device="3" data-md-device-nav="false" data-md-device-dots="true">
    //       <div className="blog-item">
    //         <div className="image-wrap">
    //           <a href="blog-details.html"><img src="assets/images/blog/1.jpg" alt="Blog"/></a>
    //         </div>
    //         <div className="blog-content">
    //           <ul className="blog-meta mb-10">
    //             <li className="admin"> <i className="fa fa-user-o"></i> admin</li>
    //             <li className="date"> <i className="fa fa-calendar-check-o"></i> 16 Aug 2021</li>
    //           </ul>
    //           <h3 className="blog-title"><a href="blog-details-2.html">Customer Onboarding Strategy: A Guide to Class</a></h3>
    //           <p>We denounce with righteous indige nation and dislike men who are so beguiled and demo...</p>
    //         </div>
    //       </div>
    //       <div className="blog-item">
    //         <div className="image-wrap">
    //           <a href="blog-details.html"><img src="assets/images/blog/2.jpg" alt="Blog"/></a>
    //         </div>
    //         <div className="blog-content">
    //           <ul className="blog-meta mb-10">
    //             <li className="admin"> <i className="fa fa-user-o"></i> admin</li>
    //             <li className="date"> <i className="fa fa-calendar-check-o"></i> 16 Aug 2021</li>
    //           </ul>
    //           <h3 className="blog-title"><a href="blog-details-2.html">How to plan a fail-proof website redesign strategy</a></h3>
    //           <p>We denounce with righteous indige nation and dislike men who are so beguiled and demo...</p>
    //         </div>
    //       </div>
    //       <div className="blog-item">
    //         <div className="image-wrap">
    //           <a href="blog-details.html"><img src="assets/images/blog/3.jpg" alt="Blog"/></a>
    //         </div>
    //         <div className="blog-content">
    //           <ul className="blog-meta mb-10">
    //             <li className="admin"> <i className="fa fa-user-o"></i> admin</li>
    //             <li className="date"> <i className="fa fa-calendar-check-o"></i> 16 Aug 2021</li>
    //           </ul>
    //           <h3 className="blog-title"><a href="blog-details-2.html">How investing in dependend increasing to business</a></h3>
    //           <p>We denounce with righteous indige nation and dislike men who are so beguiled and demo...</p>
    //         </div>
    //       </div>
    //       <div className="blog-item">
    //         <div className="image-wrap">
    //           <a href="blog-details.html"><img src="assets/images/blog/4.jpg" alt="Blog"/></a>
    //         </div>
    //         <div className="blog-content">
    //           <ul className="blog-meta mb-10">
    //             <li className="admin"> <i className="fa fa-user-o"></i> admin</li>
    //             <li className="date"> <i className="fa fa-calendar-check-o"></i> 16 Aug 2021</li>
    //           </ul>
    //           <h3 className="blog-title"><a href="blog-details-2.html">7 Productivity tips to avoid burnout when working</a></h3>
    //           <p>We denounce with righteous indige nation and dislike men who are so beguiled and demo...</p>
    //         </div>
    //       </div>
    //       <div className="blog-item">
    //         <div className="image-wrap">
    //           <a href="blog-details.html"><img src="assets/images/blog/5.jpg" alt="Blog"/></a>
    //         </div>
    //         <div className="blog-content">
    //           <ul className="blog-meta mb-10">
    //             <li className="admin"> <i className="fa fa-user-o"></i> admin</li>
    //             <li className="date"> <i className="fa fa-calendar-check-o"></i> 16 Aug 2021</li>
    //           </ul>
    //           <h3 className="blog-title"><a href="blog-details-2.html">Email marketing tips that will increase your sales</a></h3>
    //           <p>We denounce with righteous indige nation and dislike men who are so beguiled and demo...</p>
    //         </div>
    //       </div>
    //       <div className="blog-item">
    //         <div className="image-wrap">
    //           <a href="blog-details.html"><img src="assets/images/blog/6.jpg" alt="Blog"/></a>
    //         </div>
    //         <div className="blog-content">
    //           <ul className="blog-meta mb-10">
    //             <li className="admin"> <i className="fa fa-user-o"></i> admin</li>
    //             <li className="date"> <i className="fa fa-calendar-check-o"></i> 16 Aug 2021</li>
    //           </ul>
    //           <h3 className="blog-title"><a href="blog-details-2.html">How to maintain customer relations disaster strikes</a></h3>
    //           <p>We denounce with righteous indige nation and dislike men who are so beguiled and demo...</p>
    //         </div>
    //       </div>
    //       <div className="blog-item">
    //         <div className="image-wrap">
    //           <a href="blog-details.html"><img src="assets/images/blog/1.jpg" alt="Blog"/></a>
    //         </div>
    //         <div className="blog-content">
    //           <ul className="blog-meta mb-10">
    //             <li className="admin"> <i className="fa fa-user-o"></i> admin</li>
    //             <li className="date"> <i className="fa fa-calendar-check-o"></i> 16 Aug 2021</li>
    //           </ul>
    //           <h3 className="blog-title"><a href="blog-details-2.html">How to plan a fail-proof website redesign strategy</a></h3>
    //           <p>We denounce with righteous indige nation and dislike men who are so beguiled and demo...</p>
    //         </div>
    //       </div>
    //     </div> 
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            
        <div className="blog-item">
           <div className="image-wrap">
            <a href="blog-details.html"><img src={item.player.image} alt={item.player.title}/></a>
            </div>
            <div className="blog-content">
              <ul className="blog-meta mb-10">
                <li className="admin"> <i className="fa fa-user-o"></i> admin</li>
                <li className="date"> <i className="fa fa-calendar-check-o"></i> 16 Aug 2021</li>
              </ul>
              <h3 className="blog-title"><a href="blog-details-2.html">Customer Onboarding Strategy: A Guide to Class</a></h3>
              <p>We denounce with righteous indige nation and dislike men who are so beguiled and demo...</p>
            </div>
        
            {/* <div className="blog-content">
              <ul className="blog-meta mb-10">
                <li className="admin"> <i className="fa fa-user-o"></i> admin</li>
                <li className="date"> <i className="fa fa-calendar-check-o"></i> 16 Aug 2021</li>
              </ul>
              <h3 className="blog-title"><a href="blog-details-2.html">Customer Onboarding Strategy: A Guide to Class</a></h3>
              <p>We denounce with righteous indige nation and dislike men who are so beguiled and demo...</p>
            </div> */}
                {/* <h4>{item.player.title}</h4>
                <p>{item.player.desc}</p> */}
            
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                {/* <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button> */}
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                {/* <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button> */}
                <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Carousel