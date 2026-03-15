"use client";
import { useEffect, useState } from "react";
import Title from "./../../components/ui/Title";
import { User } from "@/src/types/types";
import { useUserStore } from "@/src/store/store";
import SingleUser from "@/src/components/ui/SingleUser";
import Error from "@/src/components/ui/Error";

export default function page() {
  const { users, setUser } = useUserStore();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<boolean>();
  const [search, setSearch] = useState<string>("");
  const [filteredList, setFilteredList] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        setUser(data);
        setLoading(false);
      } catch {
        setError(true);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (search.length === 0) {
      setFilteredList(users);
    } else {
      setFilteredList(users.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())));
    }
  }, [search, users]);
  return (
    <>
      <section className="users">
        <div className="wrapper p-2">
          <div className="content-wrapper bg-white rounded-[24px] p-5">
            <div className="title-wrapper mb-3 ml-6">
              <Title text="Users" />
            </div>
            <div className="search-wrapper mb-6">
              <label htmlFor="user">Search: </label>
              <input
                type="text"
                name="user"
                id="user"
                className="p-1 border"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {error ? (
              <Error />
            ) : loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="users">
                  {filteredList.map((item, index) => (
                    <SingleUser
                      key={index}
                      user={item}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
