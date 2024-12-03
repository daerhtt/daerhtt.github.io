import Image from "next/image";
import "./index.css"
export default function Home() {
  return (
  <>
 <div className="container">
        <h1 className="main-title">Мои проекты</h1>

        <div className="projects">
        <div className="project">
            <Image src="/project1.jpg" alt="Проект 1" width={1000} height={1000} className="project-image"/>
            <h2 className="project-title">Проект 1</h2>
            <p className="project-description">Краткое описание проекта 1.</p>
        </div>

        <div className="project">
            <Image src="/project2.jpg" alt="Проект 2" width={1000} height={1000} className="project-image"/>
            <h2 className="project-title">Проект 2</h2>
            <p className="project-description">Краткое описание проекта 2.</p>
        </div>

        <div className="project">
            <Image src="/project3.jpg" alt="Проект 3" width={1000} height={1000} className="project-image"/>
            <h2 className="project-title">Проект 3</h2>
            <p className="project-description">Краткое описание проекта 3.</p>
        </div>
    </div>
</div>
</>
  );
}
