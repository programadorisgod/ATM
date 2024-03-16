import Sheperd from 'react-shepherd'
import './step.css'
const steps: Sheperd.ShepherdOptionsWithType[] = [
  {
    id: 'intro',
    attachTo: { element: '.bank_notes_container', on: 'top' },
    buttons: [
      {
        classes: 'w-[50px] h-6 bg-red-500 m-2',
        text: 'Exit',
        type: 'cancel',
      },
      {
        classes: 'w-[50px] h-6 bg-blue-500 m-2',
        text: 'Next',
        type: 'next',
      },
    ],
    title: 'Bienvenido al cajero automático',

    classes: 'bg-gray-200 text-black p-2 w-96 m-2 rounded-lg',
    scrollTo: false,
    text: [
      'En este tutorial aprenderás a usarlo, para que no tengas problemas.',
    ],
  },
  {
    id: 'step-1',
    attachTo: { element: '.card_slot', on: 'right-start' },
    highlightClass: 'bg-gray-200',
    buttons: [
      {
        classes: 'w-[50px] h-6 bg-red-500 m-2',
        text: 'Exit',
        type: 'cancel',
      },
      {
        classes: 'w-[50px] h-6 bg-green-500 m-2',
        text: 'Back',
        type: 'back',
      },
      {
        classes: 'w-[50px] h-6 bg-blue-500 m-2',
        text: 'Next',
        type: 'next',
      },
    ],
    title: 'Insertar tarjeta',
    classes: 'bg-gray-200 text-black p-2 w-96 m-2 rounded-lg',
    scrollTo: true,
    text: [
      'Para comenzar, inserta tu tarjeta en la ranura, dando click en el icono de tarjeta.',
    ],
    when: {
      hide: () => {
        const button: HTMLButtonElement | null =
          document.querySelector('.card_slot')
        button?.click()
      },
    },
  },
  {
    id: 'step-2',
    attachTo: { element: '.withdraw', on: 'bottom-end' },
    highlightClass: 'bg-red-700',
    buttons: [
      {
        classes: 'w-[50px] h-6 bg-red-500 m-2',
        text: 'Exit',
        type: 'cancel',
      },
      {
        classes: 'w-[50px] h-6 bg-green-500 m-2',
        text: 'Back',
        type: 'back',
      },
      {
        classes: 'w-[50px] h-6 bg-blue-500 m-2',
        text: 'Next',
        type: 'next',
      },
    ],
    title: 'Iniciar el proceso de retiro',
    classes: 'bg-gray-200 text-black p-2 w-96 m-2 rounded-lg',
    scrollTo: true,
    text: ['Para retirar dinero, da click en el botón de retirar.'],
    when: {
      hide: () => {
        const button: HTMLButtonElement | null =
          document.querySelector('.withdraw')
        button?.click()
      },
    },
  },
  {
    id: 'step-3',
    attachTo: { element: '.amounts', on: 'right-start' },
    highlightClass: 'bg-red-700',
    buttons: [
      {
        classes: 'w-[50px] h-6 bg-red-500 m-2',
        text: 'Exit',
        type: 'cancel',
      },
      {
        classes: 'w-[50px] h-6 bg-green-500 m-2',
        text: 'Back',
        type: 'back',
      },
      {
        classes: 'w-[50px] h-6 bg-blue-500 m-2',
        text: 'Next',
        type: 'next',
      },
    ],
    title: 'Monto a retirar',
    classes: 'bg-gray-200 text-black p-2 w-96 m-2 rounded-lg',
    scrollTo: true,
    text: [
      'Selecciona el monto que deseas retirar, puedes seleccionar uno de los montos sugeridos o seleccionar otro monto. Por ejemplo, si deseas retirar $10.000, selecciona el monto de $10.000.',
    ],
    when: {
      hide: () => {
        const button: HTMLButtonElement | null =
          document.querySelector('.button_amount')
        button?.innerText === '10,000' && button?.click()
      },
    },
  },
  {
    id: 'step-4',
    attachTo: { element: '.options', on: 'right-start' },
    buttons: [
      {
        classes: 'w-[50px] h-6 bg-red-500 m-2',
        text: 'Exit',
        type: 'cancel',
      },
      {
        classes: 'w-[50px] h-6 bg-green-500 m-2',
        text: 'Back',
        type: 'back',
      },
      {
        classes: 'w-[66px] h-6 bg-blue-500 m-2',
        text: 'Terminar',
        type: 'cancel',
      },
    ],
    title: 'Finalizar el proceso de retiro',
    classes: 'bg-gray-200 text-black p-2 w-96 m-2 rounded-lg',
    scrollTo: true,
    text: [
      'Para finalizar el proceso de retiro, das clik en el boton Enter. Si deseas cancelar el proceso, da click en el botón de Cancel. Si deseas limpiar el proceso, da click en el botón de Clear.',
    ],
  },
]
export default steps
