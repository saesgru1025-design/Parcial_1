import { useState } from 'react'
import './App.css'

const questionsData = [
  {
    id: 14,
    question: "Redacta dos etiquetas de navegación para un sitio web de educación online, que sean claras e inclusivas.",
    solution: (
      <div className="tags-container">
        <span className="tag">"Para estudiantes"</span>
        <span className="tag">"Centro de ayuda"</span>
      </div>
    )
  },
  {
    id: 15,
    question: "Formula dos preguntas que deberían incluirse en un formulario de registro para una red social, aplicando buenas prácticas de UX Writing.",
    solution: (
      <div className="tags-container">
        <span className="tag">"¿Cómo te gustaría que te llamemos?"</span>
        <span className="tag">"¿Cuál es tu correo electrónico?"</span>
      </div>
    )
  },
  {
    id: 16,
    question: "Redacta un párrafo de instrucciones para un tutorial que explique cómo cambiar la foto de perfil en una aplicación móvil.",
    solution: (
      <p>
        "Para actualizar tu imagen, ve a tu perfil y selecciona el ícono de la cámara. Luego, elige tu foto favorita desde tu galería y presiona «Guardar cambios» para que todos puedan verte."
      </p>
    )
  },
  {
    id: 17,
    question: "Escribe un ejemplo de texto accesible que describa una imagen para usuarios con discapacidad visual en un sitio de turismo.",
    solution: (
      <div>
        <img src="/playa.jpg" alt="Fotografía de una playa soleada y tranquila con arena blanca, mar azul turquesa y palmeras inclinadas hacia la orilla del agua." className="solution-image" />
        <p>
          "Fotografía de una playa soleada y tranquila con arena blanca, mar azul turquesa y palmeras inclinadas hacia la orilla del agua."
        </p>
      </div>
    )
  }
];

function App() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleQuestion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Resolución de Parcial</h1>
        <p>Diseño de Interfaces - UX Writing</p>
      </header>

      <div className="questions-container">
        {questionsData.map((item) => (
          <div 
            key={item.id} 
            className={`question-card ${expandedId === item.id ? 'expanded' : ''}`}
          >
            <div 
              className="question-header" 
              onClick={() => toggleQuestion(item.id)}
            >
              <div className="question-title-wrapper">
                <span className="question-number">{item.id}</span>
                <h3 className="question-text">{item.question}</h3>
              </div>
              <div className="expand-icon">
                {expandedId === item.id ? '▲' : '▼'}
              </div>
            </div>
            
            <div className="question-content">
              <div className="solution-box">
                <h4 className="solution-label">Respuesta</h4>
                <div className="solution-text">
                  {item.solution}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>Autor: <strong>Samuel Grajales</strong> | Código: <strong>2369226</strong></p>
      </footer>
    </div>
  )
}

export default App
