import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  :root {
    --primary-color: #222260;
    --primary-color2: rgba(34, 34, 96, 0.6);
    --primary-color3: rgba(34, 34, 96, 0.4);
    --color-green: #42AD00;
    --color-grey: #aaa;
    --color-accent: #F56692;
    --color-delete: #FF0000;
  }
    body{
    font-family: 'nunito', sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color: rgba(34, 34, 96, 6);
    }
    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color)
    }
        .error{
          color: red;
          animation: shake 0.5 ease-in-out;
          @keyframes shake{
            0%{
               transfrom: translatex(0);
            }
            25%{
              transfrom: translatex(10px); 
            } 
            50%{
              transfrom: translatex(-10px);
            }
            75%{
              transfrom: translatex(10px);
            }
            100%{
              transfrom: translatex(0);
            }        
          }
        }
`;
