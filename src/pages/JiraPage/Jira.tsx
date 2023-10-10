import React from 'react'


export default function Jira() {
    return (
        <>
            <section className='blogCourse'>
                <div className='titleCourse'>
                    <h3>Blog</h3>
                    <p>Thông tin công nghệ số!!!</p>
                </div>
                <div className='blogCourseContainer'>
                    <h6><a href=""><i className="fas fa-bullhorn"></i>PHÙ HỢP VỚI BẠN</a></h6>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='blogItemLeft'>
                                <div className='row'>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>
                                                    <img
                                                        src="./images/time.jpg"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.onerror = null; // Reset the onerror handler to avoid an infinite loop
                                                            target.src =
                                                                "#";
                                                        }}
                                                        alt=""
                                                    />

                                                </div>
                                                <h6>Thời gian và động lực</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>
                                                    <img
                                                        src="./images/tailwind-css.jpg"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.onerror = null; // Reset the onerror handler to avoid an infinite loop
                                                            target.src =
                                                                "#";
                                                        }}
                                                        alt=""
                                                    />

                                                </div>
                                                <h6>Tailwind css và cách cài đặt cơ bản </h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>
                                                    <img
                                                        src="./images/html.png"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.onerror = null; // Reset the onerror handler to avoid an infinite loop
                                                            target.src =
                                                                "#";
                                                        }}
                                                        alt=""
                                                    />


                                                </div>
                                                <h6>Cấu trúc cơ bản trong HTML</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Custom theme Material UI với TypeScript đơn giản, hiệu quả...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>
                                                    <img
                                                        src="./images/reactjs.png"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.onerror = null; // Reset the onerror handler to avoid an infinite loop
                                                            target.src =
                                                                "#";
                                                        }}
                                                        alt=""
                                                    />

                                                </div>
                                                <h6>Material UI custom theme với TypeScript</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Trắc hẳn ai cũng biết một trang web thì không thể nào thiếu đi HTML và HTML làm nên cấu trúc của một trang web...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>

                                                    <img
                                                        src="./images/component.png"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.onerror = null; // Reset the onerror handler to avoid an infinite loop
                                                            target.src =
                                                                "#";
                                                        }}
                                                        alt=""
                                                    />

                                                </div>
                                                <h6>Cách tạo một component nhanh chóng chỉ bằng 3 ký tự</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Tạo một component nhiều lúc cũng khá mất nhiều thời gian nên mình xin giới thiệu extention này cho mọi người nhé...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>

                                                    <img
                                                        src="./images/material.png"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.onerror = null; // Reset the onerror handler to avoid an infinite loop
                                                            target.src =
                                                                "#";
                                                        }}
                                                        alt=""
                                                    />

                                                </div>
                                                <h6>Material UI custom theme với TypeScript</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Như các bạn đã biết chúng ta sẽ sử dụng target="_blank" cho thẻ a để khi người dùng click vô sẽ mở liên kết trên một tab mới...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>

                                                    <img
                                                        src="./images/javascript.png"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.onerror = null; // Reset the onerror handler to avoid an infinite loop
                                                            target.src =
                                                                "#";
                                                        }}
                                                        alt=""
                                                    />

                                                </div>
                                                <h6>Xử lý bất đồng bộ trong Javascript (phần 2)</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Async/await là cơ chế giúp bạn thực thi các thao tác bất đồng bộ một cách tuần tự hơn , giúp đoạn code nhìn qua tưởng như đồng...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <img
                                                    src="./images/typescript.png"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.onerror = null; // Reset the onerror handler to avoid an infinite loop
                                                        target.src =
                                                            "#";
                                                    }}
                                                    alt=""
                                                />

                                                <h6>TyperScrip là gì, Vì sao nên dùng TyperScript</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Link khóa học cho anh em nào tò mò ( Đừng lo vì tất cả đều miễn......</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='blogItemRight'>
                                <div className='blogRightBox'>
                                    <h6>Các chủ đề được đề xuất</h6>
                                    <ul>
                                        <li><a href="">Front-end / Mobile apps</a></li>
                                        <li><a href="">UI / UX / Design</a></li>
                                        <li><a href="">BACK-END</a></li>
                                        <li><a href="">Thư viện</a></li>
                                        <li><a href="">Chia sẻ người trong nghề</a></li>
                                        <li><a href="">Châm ngôn IT</a></li>
                                        <li><a href="">Chủ đề khác</a></li>
                                    </ul>
                                </div>

                                <div className='blogRightBox'>
                                    <h6>Bài đăng được đề xuất</h6>
                                    <div className='postBlog'>
                                        <img src="./images/reactlogo.png" alt="" />
                                        <h6>Routing trong reactjs</h6>
                                        <p className='colorCardTitle'>Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...</p>
                                        <div className='imgPost'>
                                            <img src="./images/imgInstrutors/instrutor6.jpg" alt="" />
                                            <span className='colorCardTitle'> Nguyên Văn</span>
                                        </div>
                                    </div>
                                    <div className='postBlog'>
                                        <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1021/6173be68944ad.jpg" alt="" />
                                        <h6>Lập trình hướng đối tượng oop</h6>
                                        <p className='colorCardTitle'>Chúng ta sẽ cùng nhau tìm hiểu cách oop trong reactjs...</p>
                                        <div className='imgPost'>
                                            <img src="./images/imgInstrutors/instrutor8.jpg" alt="" />
                                            <span className='colorCardTitle'> Nguyên Văn Vũ</span>
                                        </div>
                                    </div>
                                    <div className='postBlog'>
                                        <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1017/6172259ab8b80.png" alt="" />
                                        <h6>Xử Lý Bất Đồng Bộ Trong Javascript</h6>
                                        <p className='colorCardTitle'>Chắc chắn khi lập trình, bạn sẽ có các công việc cần thời gian delay (gọi API, lấy dữ liệu từ Database, đọc/ghi file,...). Và đây...</p>
                                        <div className='imgPost'>
                                            <img src="./images/imgInstrutors/instrutor9.jpg" alt="" />
                                            <span className='colorCardTitle'> Nguyên Minh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
 