import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	name: string;
};

export default function exit(req: NextApiRequest, res: NextApiResponse) {
	res.clearPreviewData({});
	res.writeHead(307, { location: "/" });
	res.end();
}
