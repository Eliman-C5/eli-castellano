type Props = {
  text: string;
  buttonText: string;
  styles: string
};

export const CopyToClipboard = ({ text, buttonText, styles }: Props) => {

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Error al copiar al portapapeles: ", err);
    }
  };

  return (
    <div className={`${styles}`}>
      <button
        onClick={(event) => {
          event.currentTarget.textContent = 'Email was copied!'
          handleClick()
        }}
        onMouseEnter={(event) => (event.currentTarget.textContent = "Copy to clipboard")}
        onMouseLeave={(event) => (event.currentTarget.textContent = buttonText)}
        className='text-blue-500 font-medium hover:text-[1.2rem]'
      >
        {buttonText}
      </button>
    </div>
  );
}