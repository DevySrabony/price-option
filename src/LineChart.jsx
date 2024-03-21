
import { LineChart as LChart, Line, XAxis, YAxis, } from 'recharts';
const LineChart = () => {
    const mathMarks = [
        { "id": 1, "name": "Student 1", "math_marks": 85, "physics_marks": 75, "chemistry_marks": 80, "biology_marks": 70 },
        { "id": 2, "name": "Student 2", "math_marks": 78, "physics_marks": 70, "chemistry_marks": 85, "biology_marks": 72 },
        { "id": 3, "name": "Student 3", "math_marks": 92, "physics_marks": 82, "chemistry_marks": 88, "biology_marks": 85 },
        { "id": 4, "name": "Student 4", "math_marks": 88, "physics_marks": 80, "chemistry_marks": 90, "biology_marks": 78 },
        { "id": 5, "name": "Student 5", "math_marks": 72, "physics_marks": 68, "chemistry_marks": 75, "biology_marks": 65 },
        { "id": 6, "name": "Student 6", "math_marks": 90, "physics_marks": 85, "chemistry_marks": 92, "biology_marks": 88 },
        { "id": 7, "name": "Student 7", "math_marks": 82, "physics_marks": 78, "chemistry_marks": 80, "biology_marks": 76 },
        { "id": 8, "name": "Student 8", "math_marks": 95, "physics_marks": 90, "chemistry_marks": 96, "biology_marks": 92 },
        { "id": 9, "name": "Student 9", "math_marks": 79, "physics_marks": 72, "chemistry_marks": 78, "biology_marks": 75 },
        { "id": 10, "name": "Student 10", "math_marks": 87, "physics_marks": 82, "chemistry_marks": 88, "biology_marks": 85 }
      ]
      
      
    return (
        <div className='flex flex-col justify-center space-y-5'>
            <div  className='text-4xl text-center'>
            <h2>This is a line chart</h2>
            </div>
        <div className='flex justify-center'>
        <LChart width={900} height={400} data={mathMarks}>
            <Line dataKey="math_marks" stroke='purple'></Line>
            <Line dataKey="physics_marks"></Line>
            <Line dataKey="chemistry_marks" stroke='red'></Line>
            <Line dataKey="biology_marks" stroke='green'></Line>
            <XAxis dataKey="name" />
             <YAxis />
            </LChart>
        </div>
            
        </div>
    );
};

export default LineChart;