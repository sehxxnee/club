import React, { useState } from "react";

import { Club } from "@/types/club";
import ClubButton from "../button/ClubButton";
import CreateClubButton from "../button/CreateClubButton";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const clubs: Club[] = [
  {
    id: "1",
    name: "엔샵",
    description: "세종대학교 SW동아리",
    imageUrl: "../img/club_image_example1.jpeg",
  },
  {
    id: "2",
    name: "그리디",
    description: "세종대학교 SW동아리",
    imageUrl: "../img/club_image_example1.jpeg",
  },
  {
    id: "3",
    name: "EnSharp",
    description: "제로베이스 SW 개발동아리 EnSharp 입니다.",
    imageUrl: "../img/club_image_example1.jpeg",
  },
];

const ClubList = () => {
  return (
    <Card className="max-w-md w-full ">
      <CardHeader className="">
        <CardTitle className="text-xl">내 동아리 목록</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {clubs.map((club) => (
          <ClubButton key={club.id} club={club} />
        ))}
        <CreateClubButton />
      </CardContent>
    </Card>
  );
};

export default ClubList;
