import Input from "../../components/Input"

const Form = () => {
  return (
    <div className="bg-white w-[600px] h-[800px]  shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className="text-4xl font-extrabold">Welcome</div>
        <div className="text-xl font-light">Sign up now get started</div>
        <Input label="Full name" name="name" placeholder="Enter your name"  className="mb-6"/>
        <Input label="Email address" name="email" placeholder="Enter your email" className="mb-6"/>
        <Input label="password" type="password"  name="password" placeholder="password" className="mb-6" />

    </div>
  )
}

export default Form
