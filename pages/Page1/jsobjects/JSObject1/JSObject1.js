		d3.calHeatmap.init({
			start: oneYearAgo(),
			maxDate: new Date(),
			range: 1,
			rowLimit: 7,
			domain: "year",
			subDomain: "day",
			data: "/api/users/1/annotations/",
			cellSize: 10.5
		});