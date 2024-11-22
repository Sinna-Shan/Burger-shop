
import { ExclamationCircleOutlined } from "@ant-design/icons";

const ErrorPage = () => {
    return (
      <div className="flex h-screen w-full bg-slate-200 flex-col items-center justify-center gap-4">
        <ExclamationCircleOutlined className='text-6xl text-sky-800'/>
        <h1 className="text-6xl text-slate-500 font-bold">
          404 Page Not Found
        </h1>
        <p className="text-xl text-slate-400">
          sorry the page you are looking for is not found.
        </p>
      </div>
    );
}

export default ErrorPage;
