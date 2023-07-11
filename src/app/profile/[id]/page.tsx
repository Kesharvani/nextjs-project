export default function UserProfile({params}:any){
    console.log("Hi this is user profile page");
    return (
        <div>
            <div>User profile page <span>{params.id}</span></div>
            
        </div>
    )
}