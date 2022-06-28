import axios from "axios";
import * as S from "./styles";
import { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";

export default function Search() {

  const [ centers, setCenters ] = useState([]);
  const [ courses, setCourses ] = useState([]);
  const [ students, setStudents ] = useState([]);
  const [ seaching, setSearching ] = useState(true);
  const [ inputs, setInputs ] = useState({ student: "", center: -1, course: -1})

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
      {seaching ? <Searching /> : <SearchResults />}
      
    </>
  );

    function Searching() {
      return (
        <S.Content>
          <div>
            <S.ContentHeader>
              <S.ContentTitle>Buscar Alunos</S.ContentTitle>
              <S.Form onSubmit={(e) => search(e)}>  
                <WriteName />
                <SelectCenter />
                <SelectCourse />

                <S.Button type="submit">Buscar</S.Button>
              </S.Form>
            </S.ContentHeader>
          </div>
        </S.Content>
      );
    }

    function SearchResults(){
      return(
        <S.Content>
          <div>
            <S.ContentHeader>
              <S.ContentTitle>Resultados</S.ContentTitle>
            </S.ContentHeader>
            <S.ContentBody>
              <S.ContentTable>
                <S.ContentTableHeader>
                  <S.ContentTableHeaderTitle>Nome</S.ContentTableHeaderTitle>
                  <S.ContentTableHeaderTitle>Matrícula</S.ContentTableHeaderTitle>
                </S.ContentTableHeader>
                <S.ContentTableBody>
                  {students.map(({ name, register}) => (
                    <S.ContentTableRow key={register}>
                      <S.ContentTableRowTitle>{name}</S.ContentTableRowTitle>
                      <S.ContentTableRowTitle>{register}</S.ContentTableRowTitle>
                    </S.ContentTableRow>
                  ))}
                </S.ContentTableBody>
              </S.ContentTable>
            </S.ContentBody>
          </div>
        </S.Content>

      )
    }

    function search(e) {
      e.preventDefault();
      setSearching(false);

      const { student, course } = inputs;
      axios
        .get(`https://dcx-manager.herokuapp.com/student/${student}/${course}`)
        .then((res) => setStudents(res.data))
        .catch((err) => console.log(err));
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
            <option key={center.id} value={center.id}>
              {center.name}
            </option>
          ))}
        </S.Select>
      );
    }

    function SelectCourse(){
      return (
        <S.Select value={inputs.course} onChange={(e) => handleCourse(e)}>
          <option value="">Selecione o curso</option>
          {courses.map((course) => (
            <option key={course.id} value={course.code}>
              {course.name}
            </option>
          ))}
        </S.Select>
      );
    }

    function WriteName(){
      return (
        <S.Input
          type="text"
          autoFocus
          required
          value={inputs.student}
          onInput={(e) => setInputs({ ...inputs, student: e.target.value })}
          placeholder="Digite o nome do aluno"
        />
      );
    }

}
