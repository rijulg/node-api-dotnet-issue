import dotnet from "node-api-dotnet";

const Console = dotnet.System.Console;
Console.WriteLine("Hello from .NET!");

const myDll = dotnet.load("/home/workspace/dotnet/bin/Debug/net6.0/dotnet.dll");
console.log(myDll);
const helloClass = new dll.HelloDll();
console.log(helloClass);
const data = await helloClass.Hello();
expect(data).toBe("Hello from DLL");
