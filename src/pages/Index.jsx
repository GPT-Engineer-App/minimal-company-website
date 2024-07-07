const Index = () => {
  return (
    <div className="text-center">
      <div className="relative w-full h-[400px] mb-8">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Your Company</h1>
          <p className="text-xl">We provide the best services to help your business grow.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;