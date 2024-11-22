import React from 'react'
import { useUtils } from '/src/helpers/utils.js'
import './commonBlogStyle.scss'

const TimeSeriesImputation = () => {
  const utils = useUtils()

  return (
    <div className="wrapper">
      <h1>
        Ứng dụng mô hình học máy kết hợp giải quyết bài toán mất mát dữ liệu đơn
        biến theo thời gian (1D time series)
      </h1>

      <h2>1. Tổng quan</h2>
      <p>
        - Trong cuộc sống hằng ngày, lợi ích từ các thông tin/ dữ liệu time
        series là không thể phủ nhận. Đây là dữ liệu được ghi nhận cố định với
        một đơn vị thời gian, có thể là năm, quý, tháng, giờ, phút, ... Chẳng
        hạn như dữ liệu giá chứng khoán trong lĩnh vực tài chính hay dữ liệu
        doanh thu trong lĩnh vực ngân hàng. Việc ghi nhận dữ liệu theo thời gian
        thực tồn đọng rủi ro mất mát bởi các yếu tố như khả năng lưu trữ, phần
        cứng, phần mềm, ... Từ đó, nó sẽ tác động lớn đến hiệu suất của các mô
        hình thống kê, dự đoán và dự báo trong tương lai.
      </p>
      <p>
        - Chính vì vậy, việc xử lý và tìm ra dữ liệu mất mát là một nhiệm vụ
        quan trọng trong phân tích dữ liệu thời gian. Điều này sẽ cải thiện kết
        quả từ hoạt động phân tích và đạt độ tin cậy cao trong quy trình thực
        hiện các bài toán thống kê. Bài viết này sẽ đề xuất và trình bày phương
        pháp xử lý vấn đề này cho dữ liệu thời gian 1 chiều, với lưu ý đảm bảo
        tính tương quan và quan hệ giữa các quan sát.
      </p>
      <div className="img-wrapper">
        <img
          src={utils.resolvePath('images/pictures/ts-pp-yellowstone-1.jpg')}
          alt="Time Series Data Visualization"
        />
      </div>

      <h2>2. Phương pháp luận</h2>
      <p>
        - <strong>Định nghĩa trường hợp</strong>: Để thực nghiệm bài toán xử lý
        missing data, tôi chia thành 3 trường hợp chính và xây dựng quy trình xử
        lý hiệu quả. Đầu tiên, nếu gaps xuất hiện ở cuối hoặc đầu chuỗi dữ liệu
        - được định nghĩa nếu khoảng dữ liệu gaps (T) xuất hiện trong khoảng 3*T
        tại đầu hoặc cuối chuỗi dữ liệu, thì mô hình sẽ thực thi trên dữ liệu
        liền kề đó. Nếu không thuộc hai trường hợp trên, thì sẽ được định nghĩa
        là middle và tiến hành chia dữ liệu thành hai phần trước và sau gap để
        huấn luyện và dự đoán kết quả. Đây là phương pháp linh hoạt đảm bảo tính
        chính xác và tin cậy cho bộ tính toán.
      </p>
      <p>
        - <strong>Chuẩn bị dữ liệu</strong>: Chuyển đổi từ dữ liệu đơn biến
        thành (T+1)-dimension. Chuyển đổi này cho phép tận dụng kết quả dự đoán
        tại thời điểm trước đó cho kết quả dự đoán tại thời điểm sau một cách
        hiệu quả.
      </p>
      <p>
        - <strong>Thuật toán</strong>: ARIMA, SVM, và các mô hình hồi quy như
        tree là các thuật toán tôi lựa chọn thực nghiệm.
      </p>
      <p>
        - <strong>Chỉ số đánh giá</strong>: Similarity, MAE, RMSE, FB (Forecast
        bias), FSD (Fraction of Standard Deviation). Trong đó, FB và FSD là chỉ
        số đánh giá tổng quát, trong khi 3 chỉ số còn lại sẽ đánh giá trên từng
        mẫu dữ liệu.
      </p>
      <div className="img-wrapper">
        <img
          src={utils.resolvePath('images/pictures/blog1-process.png')}
          alt="Process Flow"
        />
      </div>

      <h2>3. Kết quả thực nghiệm</h2>
      <p>
        - Kết quả thực nghiệm trên 20 fold cho mỗi trường hợp thu được như sau:
      </p>
      <div className="img-wrapper">
        <img
          src={utils.resolvePath('images/pictures/blog1-result-1.png')}
          alt="Kết quả thực nghiệm trường hợp đầu chuỗi"
          style={{ maxWidth: '75%', height: '120px' }}
        />
      </div>
      <p style={{ fontSize: '1.5em' }}>
        Kết quả thực nghiệm trường hợp đầu chuỗi
      </p>
      <div className="img-wrapper">
        <img
          src={utils.resolvePath('images/pictures/blog1-result-2.png')}
          alt="Kết quả thực nghiệm trường hợp cuối chuỗi"
          style={{ maxWidth: '75%', height: '120px' }}
        />
      </div>
      <p style={{ fontSize: '1.5em' }}>
        Kết quả thực nghiệm trường hợp cuối chuỗi
      </p>
      <div className="img-wrapper">
        <img
          src={utils.resolvePath('images/pictures/blog1-result-3.png')}
          alt="Kết quả thực nghiệm trường hợp giữa chuỗi"
          style={{ maxWidth: '75%', height: '120px' }}
        />
      </div>
      <p style={{ fontSize: '1.5em' }}>
        Kết quả thực nghiệm trường hợp giữa chuỗi
      </p>

      <p>
        Trong bài viết này, tôi không đặt ưu tiên cho một chỉ số đánh giá nào,
        vì nó phụ thuộc vào khoảng và 'giá trị' của dữ liệu nghiên cứu. Tuy
        nhiên, đánh giá tổng quan trên 3 trường hợp cho thấy rằng ARIMA cho kết
        quả tốt hơn so với mô hình ML độc lập. Hiệu quả tốt hơn nữa có thể đạt
        được bằng cách kết hợp hai phương pháp, với lớp 1 là ARIMA và lớp 2 là
        SVM reg (tận dụng phần dư từ mô hình lớp 1).
      </p>

      <h2>
        <a href="https://github.com/thanhluan7702/Imputation-1D-timeseries-data">
          4. Github
        </a>
      </h2>
    </div>
  )
}

export default TimeSeriesImputation
