import axios from "axios";
import * as S from "./styles";
import { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";

export default function Search() {

  const [ centers, setCenters ] = useState([]);
  const [ courses, setCourses ] = useState([]);
  const [ inputs, setInputs ] = useState({
    student: "",
    center: -1,
    course: -1,
  })

  useEffect(() => {
    axios
      .get("https://dcx-manager.herokuapp.com/centers")
      .then((res) => setCenters(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Navbar page="search" />
      <Content />
    </>
  );

    function Content() {
      return (
        <S.Content>
          <div>
            <S.ContentHeader>
              <S.ContentTitle>Buscar Alunos</S.ContentTitle>
              <S.Form>
                <S.Input
                  type="text"
                  autoFocus
                  value={inputs.student}
                  onInput={(e) => setInputs({ ...inputs, student: e.target.value })}
                  placeholder="Digite o nome do aluno"
                />

                <SelectCenter />

                <S.Select value={inputs.course} onChange={(e) => handleCourse(e)}>
                  <option value="">Selecione o curso</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.name}
                    </option>
                  ))}
                </S.Select>
              </S.Form>
            </S.ContentHeader>
          </div>
        </S.Content>
      );
    }

    function handleCenter(e) {
      setInputs({ ...inputs, center: e.target.value });
      axios.get(`https://dcx-manager.herokuapp.com/courses/${e.target.value}`)
        .then((res) => setCourses(res.data))
        .catch((err) => console.log(err));
    }

    function handleCourse(e){
      setInputs({ ...inputs, course: e.target.value });
    }

    function SelectCenter() {
      return (
        <S.Select value={inputs.center} onChange={(e) => handleCenter(e)}>
          <option>Selecione o centro</option>
          {centers.map((center) => (
            <option key={center.id} value={center.code}>
              {center.name}
            </option>
          ))}
        </S.Select>
      );
    }
}
