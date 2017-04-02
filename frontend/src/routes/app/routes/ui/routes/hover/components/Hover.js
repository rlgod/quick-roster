import React from 'react';

const HoverSection = () => {
    return(
        <section className="container-fluid with-maxwidth chapter">

            <article className="article">
                <h2 className="article-title">Material Hover</h2>

                <div className="row">
                    <div className="col-xl-4">
                        <div className="ih-item ih-material">
                            <a href="javascript:;">
                                <div className="img">
                                    <img src="assets/images-demo/assets/600_400-1.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <div className="info-mask bg-color-primary"></div>
                                    <div className="info-content">
                                        <div className="info-inner">
                                            <h3>Heading Here</h3>
                                            <p>Description goes here</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>                            
                    </div>
                    <div className="col-xl-4">
                        <div className="ih-item ih-material">
                            <a href="javascript:;">
                                <div className="img">
                                    <img src="assets/images-demo/assets/600_400-2.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <div className="info-mask bg-color-info"></div>
                                    <div className="info-content">
                                        <div className="info-inner">
                                            <h3>Heading Here</h3>
                                            <p>Description goes here</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>                                
                    </div>
                    <div className="col-xl-4">
                        <div className="ih-item ih-material">
                            <a href="javascript:;">
                                <div className="img">
                                    <img src="assets/images-demo/assets/600_400-3.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <div className="info-mask bg-color-dark"></div>
                                    <div className="info-content">
                                        <div className="info-inner">
                                            <h3>Heading Here</h3>
                                            <p>Description goes here</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>                                
                    </div>
                </div>
            </article>

            <article className="article">
                <h2 className="article-title">Classic</h2>

                <div className="row">
                    <div className="col-xl-4">
                        <div className="ih-item square effect3 bottom_to_top">
                            <a href="javascript:;">
                                <div className="img"><img src="assets/images-demo/assets/600_400-1.jpg" alt="img" /></div>
                                <div className="info">
                                    <h3>Heading here</h3>
                                    <p>Description goes here</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="ih-item square effect3 bottom_to_top">
                            <a href="javascript:;">
                                <div className="img"><img src="assets/images-demo/assets/600_400-2.jpg" alt="img" /></div>
                                <div className="info bg-color-info">
                                    <h3>Heading here</h3>
                                    <p>Description goes here</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="ih-item square effect3 bottom_to_top">
                            <a href="javascript:;">
                                <div className="img"><img src="assets/images-demo/assets/600_400-3.jpg" alt="img" /></div>
                                <div className="info bg-color-primary">
                                    <h3>Heading here</h3>
                                    <p>Description goes here</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4">
                        <div className="ih-item square effect3 top_to_bottom">
                            <a href="javascript:;">
                                <div className="img"><img src="assets/images-demo/assets/600_400-4.jpg" alt="img" /></div>
                                <div className="info">
                                    <h3>Heading here</h3>
                                    <p>Description goes here</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="ih-item square effect3 top_to_bottom">
                            <a href="javascript:;">
                                <div className="img"><img src="assets/images-demo/assets/600_400-5.jpg" alt="img" /></div>
                                <div className="info bg-color-info">
                                    <h3>Heading here</h3>
                                    <p>Description goes here</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="ih-item square effect3 top_to_bottom">
                            <a href="javascript:;">
                                <div className="img"><img src="assets/images-demo/assets/600_400-6.jpg" alt="img" /></div>
                                <div className="info bg-color-primary">
                                    <h3>Heading here</h3>
                                    <p>Description goes here</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </article>

        </section>
    )
}

module.exports = HoverSection;