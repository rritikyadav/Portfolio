
const Contact = () => {
    return (

        <div id="contact" className="py-20 px-6 bg-gray-800">
            <h3 className="text-3xl font-bold mb-8 text-center">Contact</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300">

                <a
                    href="mailto:ritikydv0909@gmail.com"
                    className="flex items-center gap-2 hover:text-blue-400 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor"
                        className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615A2.25 2.25 0 0 1 2.25 6.993V6.75" />
                    </svg>
                    ritikydv0909@gmail.com
                </a>

                <a
                    href="https://github.com/rritikyadav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-blue-400 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 24 24"
                        className="w-6 h-6">
                        <path fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.586 2 12.253c0 4.513 2.865 8.342 6.839 9.7.5.092.682-.217.682-.483 0-.237-.009-.865-.013-1.697-2.782.617-3.369-1.367-3.369-1.367-.454-1.174-1.11-1.486-1.11-1.486-.907-.636.07-.623.07-.623 1.003.072 1.53 1.052 1.53 1.052.892 1.557 2.341 1.107 2.91.846.092-.662.35-1.107.636-1.362-2.22-.26-4.555-1.132-4.555-5.043 0-1.114.39-2.025 1.029-2.739-.103-.26-.447-1.302.098-2.715 0 0 .84-.272 2.75 1.046A9.564 9.564 0 0 1 12 6.844c.851.004 1.705.116 2.503.34 1.91-1.318 2.75-1.046 2.75-1.046.546 1.413.202 2.455.1 2.715.64.714 1.028 1.625 1.028 2.739 0 3.922-2.338 4.78-4.566 5.036.359.317.678.944.678 1.902 0 1.373-.013 2.48-.013 2.817 0 .268.18.58.688.481C19.137 20.592 22 16.764 22 12.253 22 6.586 17.523 2 12 2z" />
                    </svg>
                    GitHub
                </a>

                <a
                    href="tel:+918447097704"
                    className="flex items-center gap-2 hover:text-blue-400 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor"
                        className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M2.25 6.75c0 7.56 6.15 13.71 13.71 13.71h2.79a1.5 1.5 0 0 0 1.5-1.5v-2.105a1.5 1.5 0 0 0-1.318-1.493l-3.852-.428a1.5 1.5 0 0 0-1.65 1.043l-.495 1.486a11.943 11.943 0 0 1-5.382-5.382l1.486-.495a1.5 1.5 0 0 0 1.043-1.65l-.428-3.852A1.5 1.5 0 0 0 9.645 4.5H7.54a1.5 1.5 0 0 0-1.5 1.5v.75z" />
                    </svg>
                    8447097704
                </a>

            </div>
        </div>
    )
}

export default Contact
