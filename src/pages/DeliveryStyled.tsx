import styled from "styled-components";

export const DeliveryStyled = styled.div`
  .is-dropship {
    display: none;
  }
  .is-dropship-mobile {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    input {
      margin-right: 0.9rem;
    }
  }
  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    .delivery {
      width: 100%;
    }
    .is-dropship {
      display: inline-block;
      input {
        margin-right: 0.9rem;
      }
    }
    .is-dropship-mobile {
      display: none;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .form {
      width: 100%;
      form {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
        .left {
          grid-column: span 2 / span 2;
        }
      }
    }
  }
  .form-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 1rem 0;
    input {
      width: 100%;
      padding: 10px 0px;
      margin-top: 20px;
      border: none;
      outline: none;
      padding-left: 1rem;
      background-color: transparent;
    }
    input::placeholder {
      opacity: 0;
    }
    span {
      position: absolute;
      top: -10px;
      left: 0;
      padding-left: 1rem;
      transform: translateY(30px);
      font-size: 0.825em;
      transition-duration: 300ms;
    }
    label:focus-within > span,
    input:not(:placeholder-shown) + span {
      top: 10px;
      transform: translateY(0px);
    }
  }
  .valid {
    border: 1px solid #1bd97b;
    ::after {
      content: "✓";
      padding-right: 1rem;
      color: #1bd97b;
    }
  }
  .invalid {
    border: 1px solid #ff8a00;
    ::after {
      content: "X";
      padding-right: 1rem;
      color: #ff8a00;
    }
  }
  .default {
    border: 1px solid #646464;
  }
  .ic-validation {
    margin-right: 1rem;
  }
  .show {
    display: block !important;
  }
  .hidden {
    display: none !important;
  }
`;
