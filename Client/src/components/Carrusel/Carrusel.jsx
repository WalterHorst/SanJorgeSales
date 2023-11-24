import { Carousel } from "antd";
const contentStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "15rem",
  color: "#fff",
  textAlign: "center",
  backgroundSize: "cover",
};
const Carrusel = () => (
  <Carousel autoplay>
    <div>
      <img
        style={contentStyle}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrYlMb7e7RNFW5SJxKvU3bmmh3EBJ4UN3pw&usqp=CAU"
        alt=""
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8rRZ4mUXkUZsLVmPb67QlMdjb4Z6igZFGA&usqp=CAU"
        alt=""
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFe3aC5zHe6fDpctfzXNJZQyxnXVzb3Oes4Q&usqp=CAU"
        alt=""
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIayzuozETKf2aY9ooN2MWgf-59IL_a4mOw&usqp=CAU"
        alt=""
      />{" "}
      */
    </div>
  </Carousel>
);
export default Carrusel;
