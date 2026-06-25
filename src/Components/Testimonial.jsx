import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Testimonial() {
    let sliderOptions = {
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        modules: [Autoplay],
    };

    return (
        <>
            <div className="container-fluid testimonial py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
                        <h1 className="display-5 text-capitalize mb-3">
                            Our Client <span className="text-primary">Reviews</span>
                        </h1>
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut pperiam gppedita gperferens gementi gcosentium et ium jorum, grapturi, quia jompora ganditate! gdolori jciliis modi gisequum quia gditinctio.
                        </p>
                    </div>

                    <div className="testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <Swiper {...sliderOptions}>
                            {/* Slide 1 */}
                            <SwiperSlide>
                                <div className="testimonial-item p-4">
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto neque id ex porro.
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" style={{ width: '60px', height: '60px' }} alt="Client" />
                                        <div className="ps-3">
                                            <h5 className="mb-1">Client Name</h5>
                                            <p className="mb-0 small text-muted">Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 2 */}
                            <SwiperSlide>
                                <div className="testimonial-item p-4">
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto neque id ex porro.
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" style={{ width: '60px', height: '60px' }} alt="Client" />
                                        <div className="ps-3">
                                            <h5 className="mb-1">Client Name</h5>
                                            <p className="mb-0 small text-muted">Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 3 */}
                            <SwiperSlide>
                                <div className="testimonial-item p-4">
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto neque id ex porro.
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid rounded-circle" src="img/testimonial-3.jpg" style={{ width: '60px', height: '60px' }} alt="Client" />
                                        <div className="ps-3">
                                            <h5 className="mb-1">Client Name</h5>
                                            <p className="mb-0 small text-muted">Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}