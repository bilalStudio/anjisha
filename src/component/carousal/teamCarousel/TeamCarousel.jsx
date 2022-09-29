import React from 'react'
import '../../../../src/component/carousal/carousal.css'
const slideWidth = 30;

const _items = [
    {
        player: {
            title: 'Efren Reyes',
            desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
            image: 'assets/images/testimonial/avatar/1.jpg',
        },
    },
    {
        player: {
            title: "Ronnie O'Sullivan",
            desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
            image: 'assets/images/testimonial/avatar/2.jpg',
        },
    },
    {
        player: {
            title: 'Shane Van Boening',
            desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
            image: 'assets/images/testimonial/avatar/3.jpg',
        },
    },
    {
        player: {
            title: 'Mike Sigel',
            desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
            image: 'assets/images/testimonial/avatar/4.jpg',
        },
    },
    {
        player: {
            title: 'Willie Mosconi',
            desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: 'assets/images/testimonial/avatar/3.jpg',
        },
    },

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
            item.styles = { ...item.styles };
            break;
        case length:
            break;
        default:
            item.styles = { ...item.styles, opacity: 0 };
            break;
    }

    return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
              <div class="team-item-wrap">
                            <div class="team-wrap">
                                <div class="image-inner">
                                    <a href="team-single.html"><img src={item.player.image} alt={item.player.title} /></a>
                                </div>
                            </div>
                            <div class="team-content text-center">
                                <h4 class="person-name"><a href="team-single.html">Angelina Jolie</a></h4>
                                <span class="designation">Business Advisor</span>
                                <ul class="team-social">
                                    <li><a href="team-single.html"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="team-single.html"><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="team-single.html"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="team-single.html"><i class="fa fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
           

           

            {/* <h4>{item.player.title}</h4>
                <p>{item.player.desc}</p> */}


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