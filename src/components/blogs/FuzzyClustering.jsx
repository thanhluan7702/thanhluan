import React from 'react'
import { useUtils } from '/src/helpers/utils.js'

import './commonBlogStyle.scss'

const FuzzyClustering = () => {
  const utils = useUtils()
  return (
    <div className="wrapper">
      <h1>Giới thiệu về phân cụm mờ (Soft Clustering)</h1>

      <h2>1. Clustering là gì?</h2>
      <p>
        Clustering (phân cụm) là một thuật toán học máy không giám sát
        (Unsupervised Learning), với mục tiêu phân chia tổng thể thành các
        nhóm/cụm - các điểm trong cùng một cụm có các đặc điểm tương đồng và
        khác biệt với các điểm ở cụm khác. Về cơ bản, các thuật toán clustering
        được chia thành hai nhóm chính: soft và hard clustering.
      </p>
      <div className="img-wrapper">
        <img
          src={utils.resolvePath('images/pictures/blog2-hard-vs-soft.png')}
          alt="Hard vs Soft Clustering"
        />
      </div>
      <p>
        <strong>Hard clustering:</strong> Thuật toán sẽ phân định mỗi điểm dữ
        liệu chỉ thuộc một nhóm duy nhất, chẳng hạn như thuật toán K-means.
      </p>
      <p>
        <strong>Soft clustering:</strong> Thay vì gán mỗi điểm vào một nhóm,
        thuật toán tính xác suất thuộc về các cụm cho từng điểm dữ liệu. Điều
        này có nghĩa là, một điểm có thể thuộc nhiều cụm với xác suất khác nhau.
        C-means là một thuật toán soft clustering sẽ được giới thiệu trong bài
        viết này.
      </p>

      <h3>a. Tổng quan về thuật toán K-means</h3>
      <p>
        K-means là một thuật toán hard clustering phổ biến. Thuật toán hoạt động
        với mục tiêu chia nhỏ dữ liệu thành k cụm sao cho các điểm dữ liệu trong
        cùng một cụm có tính chất tương tự nhau. Các bước thực hiện của thuật
        toán:
      </p>
      <ul
        style={{ paddingLeft: '20px', marginLeft: '10em', fontSize: '1.5em' }}
      >
        <li>Bước 1: Chọn số cụm k muốn tạo.</li>
        <li>Bước 2: Khởi tạo k điểm ban đầu làm center của các cụm.</li>
        <li>Bước 3: Lặp lại các bước sau cho đến khi đạt tiêu chí dừng:</li>
        <ul>
          <li>Phân mỗi điểm dữ liệu vào cụm có center gần nó nhất.</li>
          <li>
            Cập nhật center của từng cụm bằng cách tính trung bình của tất cả
            các điểm dữ liệu thuộc vào cụm đó.
          </li>
          <li>
            Kiểm tra xem việc gán dữ liệu vào từng cụm có thay đổi so với lần
            lặp trước. Nếu không có thay đổi đáng kể, thuật toán sẽ dừng.
          </li>
        </ul>
        <li>
          Bước 4: Kết thúc thuật toán khi tiêu chí dừng được đáp ứng hoặc số lần
          lặp đạt giới hạn tối đa.
        </li>
      </ul>
      <p>
        <strong>Hạn chế của thuật toán K-means:</strong> Nhạy cảm với điểm khởi
        tạo ban đầu, không linh hoạt về hình dáng cụm (giả định các cụm có hình
        dạng lồi và kích thước tương đồng), độ chính xác bị giới hạn bởi quy tắc
        dừng, và ảnh hưởng lớn bởi nhiễu, không phù hợp với dữ liệu phi tuyến
        tính.
      </p>

      <h3>b. Tổng quan về thuật toán C-means</h3>
      <p>
        Khác với K-means, C-means (FCM) cho phép một điểm dữ liệu có thể thuộc
        về nhiều cụm với các mức độ phụ thuộc khác nhau (độ mờ). Cách tiếp cận
        này giúp khám phá các cụm dữ liệu phức tạp một cách linh hoạt hơn. Các
        bước thực hiện của thuật toán:
      </p>
      <ul
        style={{ paddingLeft: '20px', marginLeft: '10em', fontSize: '1.5em' }}
      >
        <li>
          Bước 1: Chọn k điểm làm các center và đặt mức độ m (ví dụ: m = 2).
        </li>
        <li>
          Bước 2: Khởi tạo ma trận trọng số theo cơ chế partition matrix để gán
          giá trị membership.
        </li>
        <li>Bước 3: Lặp lại các bước sau cho đến khi đạt tiêu chí dừng:</li>
        <ul>
          <li>
            Tính toán center của từng cụm bằng cách sử dụng ma trận trọng số và
            công thức trung bình có trọng số.
          </li>
          <li>
            Tính toán độ thuộc của mỗi điểm dữ liệu với từng cụm bằng cách sử
            dụng trọng số và khoảng cách từ điểm đó đến center của cụm với độ mờ
            m.
          </li>
          <li>
            Cập nhật ma trận trọng số bằng cách sử dụng độ thuộc của từng điểm
            đến từng cụm và công thức mờ để tính toán trọng số mới.
          </li>
        </ul>
        <li>
          Bước 4: Kết thúc thuật toán khi tiêu chí dừng được đáp ứng hoặc số lần
          lặp đạt giới hạn tối đa.
        </li>
      </ul>
      <p>
        <strong>Hạn chế của thuật toán C-means:</strong> Nhạy cảm với thay đổi
        số lượng cụm (việc chọn số cụm không hợp lý có thể dẫn đến phân cụm
        không tối ưu), tính toán phức tạp, khó phân biệt giữa các cụm trùng lặp,
        khó xác định tham số mờ (m), bị ảnh hưởng lớn bởi outlier, và không xử
        lý tốt với dữ liệu không đạt phân phối chuẩn.
      </p>

      <h2>2. So sánh 2 thuật toán K-means và C-means</h2>

      <div className="img-wrapper">
        <img
          src={utils.resolvePath(
            'images/pictures/blog2-sosanh-kmeans-cmeans.png'
          )}
          alt="Comparison between K-means and C-means"
        />
      </div>
      <p>
        Mặc dù cả hai thuật toán có sự khác biệt, nhưng về cơ bản, C-means có
        thể được xem như một biến thể của K-means với sự cải tiến dựa trên tham
        số m. Công thức tính hàm loss của cả hai có thể quy về công thức chung
        sau:
      </p>
      <div className="img-wrapper">
        <img
          src="images/pictures/blog2-loss-chung.png"
          alt="General Loss Formula for Clustering"
        />
      </div>
      <p>
        <strong>Lưu ý:</strong> Nếu tham số m = 1, thuật toán C-means sẽ trở về
        thành K-means.
      </p>

      <h2>3. C-means hạn chế 'sự ưu tiên' trong K-means như thế nào?</h2>
      <div className="img-wrapper">
        <img
          src={utils.resolvePath('images/pictures/blog2-demo.png')}
          alt="C-means Clustering Demo"
        />
      </div>
      <p>
        Câu trả lời nằm ở <strong>độ mờ</strong>. Giả sử với trường hợp trên,
        với điểm dữ liệu thứ 5 và thứ 6 có khoảng cách đến các center của các
        cụm là như nhau, K-means sẽ có bias và gán hai điểm này vào một cụm có
        số lượng điểm nhiều hơn (giả sử là cụm 0). Trong khi đó, C-means sẽ xét
        hai điểm này có membership như nhau ở cả hai cụm.
      </p>
    </div>
  )
}

export default FuzzyClustering
