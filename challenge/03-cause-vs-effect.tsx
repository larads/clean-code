import { useEffect, useState } from "react"

interface User {
    name: string
    github: string
}

function fetchUser() {
    return {
        data: {
            user: {
                name: "Mariana Lara",
                github: "https://github.com/larads",
            },
        },
    };
}

export function UserProfile() {
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState<User | null>(null);

    useEffect(() => {
        function loadUser() {
            setIsLoading(true);

            const fetchUserResponse = fetchUser()
            setUserData(fetchUserResponse.data.user)

            setIsLoading(false)
        }

        loadUser();
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            {userData && (
                <>
                    <img src={`${userData.github}.png`
                    } alt={userData.name} />
                    <a href={userData.github}> {userData.name} </a>
                </>
            )}
        </div>
    )
}
