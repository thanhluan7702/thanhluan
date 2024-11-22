import React from 'react'
import { useUtils } from '/src/helpers/utils.js'

import './commonBlogStyle.scss'

const OptimizeCLV = () => {
  const utils = useUtils()

  return (
    <div className="wrapper">
      <h1>Xếp hạng CLV với hướng tiếp cận AHP và RFM</h1>

      <h2>1. Tổng quan</h2>
      <p>
        Trong kinh doanh, bất kể mục tiêu hay ngành nghề nào, bài toán quan hệ
        khách hàng (CRM) luôn rất quan trọng đối với mỗi doanh nghiệp. Dù là một
        doanh nghiệp thời trang hay cung cấp dịch vụ tài chính, các nhà lãnh
        đạo/ quản lý đều cần phải hiểu rõ và sâu hơn về khách hàng cũng như sản
        phẩm của mình để đề xuất và thực thi các chiến lược kinh doanh hiệu quả.
        Một trong những bài toán phổ biến là phân khúc khách hàng và áp dụng các
        chiến lược linh hoạt nhằm tối ưu chi phí và lợi nhuận. Trong bài viết
        này, Luân sẽ chia sẻ một hướng tiếp cận linh hoạt hơn đối với nhiều loại
        hình doanh nghiệp và sản phẩm.
      </p>
      <div className="img-wrapper">
        <img
          src={utils.resolvePath('images/pictures/blog3-revenue_important.png')}
          alt="Revenue Importance"
        />
      </div>

      <h2>2. Customer Life Time Value (CLV)</h2>
      <p>
        CLV hay còn được gọi là giá trị vòng đời khách hàng, là một thước đo
        quan trọng đối với bất kỳ doanh nghiệp nào. Giá trị vòng đời khách hàng
        chính là giá trị mà một khách hàng chi trả cho sản phẩm của công ty
        trong suốt quá trình sử dụng sản phẩm đó. CLV rất cao bởi nguồn lợi
        nhuận dài lâu, bền vững mà khách hàng trung thành mang lại. Doanh nghiệp
        muốn phát triển cần phải xây dựng khách hàng trung thành, đem lại lợi
        nhuận lâu dài và bền vững.
      </p>
      <p>
        Tuy nhiên, bởi sự đa dạng về ngành nghề và đặc thù về sản phẩm kinh
        doanh, CLV có các công thức khác nhau tùy vào cách định nghĩa của mỗi
        doanh nghiệp.
      </p>
      <div className="img-wrapper">
        <img
          src={utils.resolvePath('images/pictures/blog3-clv.png')}
          alt="CLV Chart"
          width="1000px"
        />
      </div>

      <h2>3. Lý thuyết RFM</h2>
      <p>
        Mô hình RFM (Recency, Frequency, Monetary) là một công cụ phân loại và
        phân tích khách hàng dựa trên ba yếu tố chính: Recency (Tần suất mua
        hàng), Frequency (Tần suất mua hàng), và Monetary (Giá trị tiêu dùng).
        Mô hình này giúp doanh nghiệp hiểu rõ hơn về hành vi mua sắm của khách
        hàng và tập trung vào nhóm khách hàng có tiềm năng cao nhất để giữ và
        phát triển.
      </p>
      <div className="img-wrapper">
        <img src="img/blog3-rfm.png" alt="RFM Model" />
      </div>
      <p>
        <strong>Ưu điểm:</strong> dễ hiểu, dễ triển khai
      </p>
      <p>
        <strong>Nhược điểm:</strong> khó quản lý danh mục nếu số lượng phân khúc
        lớn, khó khăn trong việc cài đặt rule cho mô hình, chi phí monitor cao
        dẫn đến không phù hợp với các doanh nghiệp có tình hình kinh doanh chưa
        ổn định.
      </p>

      <h2>4. Phương pháp phân tích thứ bậc - AHP</h2>
      <p>
        AHP là một phương pháp định lượng dùng để đánh giá các phương án và chọn
        một phương án thỏa mãn các tiêu chí cho trước. Thay vì yêu cầu một khối
        lượng dữ liệu lớn, AHP sử dụng ý kiến chuyên gia và không cần quá nhiều
        dữ liệu để phân tích.
      </p>
      <p>
        <strong>Ưu điểm:</strong> có thể triển khai với dữ liệu nghiên cứu nhỏ,
        được thực hiện bởi chuyên gia nên có độ tin cậy cao
      </p>
      <p>
        <strong>Nhược điểm:</strong> kết quả đánh giá cần chuyên môn và chi tiết
        cao theo nghiệp vụ
      </p>

      <h2>5. Thực nghiệm</h2>
      <p>
        <strong>Dữ liệu:</strong> với nghiên cứu này, dữ liệu bán lẻ từ{' '}
        <a href="https://www.kaggle.com/datasets/vijayuv/onlineretail">
          Online Retail
        </a>{' '}
        được lựa chọn.
      </p>
      <p>
        Mặc dù RFM là một hướng tiếp cận phổ biến và hiệu quả trong phân khúc
        khách hàng, tuy nhiên hướng tiếp cận này sẽ chịu ảnh hưởng lớn bởi người
        thực hiện nghiên cứu (bias). Do đó, trong nghiên cứu này, tôi thay thế
        RFM segmentation bằng phương pháp C-means, được giới thiệu{' '}
        <a href="fuzzy_clustering.html">tại đây</a>. Sau đó, tiến hành scale dữ
        liệu bằng Min-max, với lưu ý rằng giá trị của mỗi feature tương ứng với
        độ lớn tích cực của feature đó.
      </p>
      <div className="img-wrapper">
        <img
          src={utils.resolvePath('images/pictures/blog3-rfm-scale.png')}
          alt="RFM Data Scaling"
        />
      </div>
      <p>
        Tiếp tục phân cụm dữ liệu với C-means trên các features đã được scale và
        lựa chọn cụm dựa trên chỉ số PCI.
      </p>
      <div className="img-wrapper">
        <img
          src={utils.resolvePath('images/pictures/blog3-pci-result.png')}
          alt="PCI Clustering Results"
          width="500px"
        />
      </div>
      <p>
        Tính toán trọng số cho feature theo phương pháp AHP. Với dữ liệu nghiên
        cứu và lĩnh vực bán lẻ, tôi đặt mức ưu tiên F > R > M. Cuối cùng, tính
        toán CLV cho từng khách hàng/nhóm và xếp hạng cho từng nhóm, giúp giảm
        thiểu khó khăn trong quá trình thực thi các chiến lược tổng/ngách cho
        từng level.
      </p>
      <div className="img-wrapper">
        <img
          src={utils.resolvePath('images/pictures/blog3-clv-ranking.png')}
          alt="CLV Ranking Results"
        />
      </div>

      <h2>
        <a href="https://github.com/thanhluan7702/Enhanced-LTV-weightRFM/tree/master">
          6. Github
        </a>
      </h2>
    </div>
  )
}

export default OptimizeCLV
