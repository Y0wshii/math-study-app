import React, { useRef, useEffect, useState, MouseEvent, TouchEvent } from 'react';
import { Eraser, Pencil } from 'lucide-react';

const Whiteboard = () => {
 const canvasRef = useRef<HTMLCanvasElement>(null);
 const [isDrawing, setIsDrawing] = useState(false);
 const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
 const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

 useEffect(() => {
   const canvas = canvasRef.current;
   if (!canvas) return;
   
   const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
   const rect = canvas.getBoundingClientRect();
   
   canvas.width = rect.width;
   canvas.height = rect.height;
   
   ctx.lineCap = 'round';
   ctx.lineJoin = 'round';
   setContext(ctx);
   
   updateTool(ctx, tool);
 }, []);

 const updateTool = (ctx: CanvasRenderingContext2D, currentTool: 'pen' | 'eraser') => {
   if (currentTool === 'pen') {
     ctx.globalCompositeOperation = 'source-over';
     ctx.strokeStyle = '#000000';
     ctx.lineWidth = 2;
   } else {
     ctx.globalCompositeOperation = 'destination-out';
     ctx.strokeStyle = 'rgba(255,255,255,1)';
     ctx.lineWidth = 20;
   }
 };

 const getCoordinates = (event: MouseEvent | TouchEvent) => {
   const canvas = canvasRef.current;
   if (!canvas) return { x: 0, y: 0 };

   const rect = canvas.getBoundingClientRect();
   const scaleX = canvas.width / rect.width;
   const scaleY = canvas.height / rect.height;
   
   let x: number, y: number;
   if ('touches' in event) {
     x = (event.touches[0].clientX - rect.left) * scaleX;
     y = (event.touches[0].clientY - rect.top) * scaleY;
   } else {
     x = (event.clientX - rect.left) * scaleX;
     y = (event.clientY - rect.top) * scaleY;
   }
   
   return { x, y };
 };

 const startDrawing = (event: MouseEvent | TouchEvent) => {
   event.preventDefault();
   if (!context) return;

   const coords = getCoordinates(event);
   context.beginPath();
   context.moveTo(coords.x, coords.y);
   setIsDrawing(true);
 };

 const draw = (event: MouseEvent | TouchEvent) => {
   event.preventDefault();
   if (!isDrawing || !context) return;
   
   const coords = getCoordinates(event);
   context.lineTo(coords.x, coords.y);
   context.stroke();
 };

 const stopDrawing = () => {
   if (!context || !isDrawing) return;
   
   context.closePath();
   setIsDrawing(false);
 };

 const clearCanvas = () => {
   if (!context || !canvasRef.current) return;
   context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
 };

 const handleToolChange = (newTool: 'pen' | 'eraser') => {
   if (!context) return;
   setTool(newTool);
   updateTool(context, newTool);
 };

 return (
   <div className="flex flex-col h-full bg-white rounded-xl shadow-md p-4">
     <div className="flex justify-between items-center mb-4">
       <div className="flex gap-2">
         <button
           onClick={() => handleToolChange('pen')}
           className={`p-2 rounded-lg ${tool === 'pen' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
           title="Pen"
         >
           <Pencil className="w-5 h-5" />
         </button>
         <button
           onClick={() => handleToolChange('eraser')}
           className={`p-2 rounded-lg ${tool === 'eraser' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
           title="Eraser"
         >
           <Eraser className="w-5 h-5" />
         </button>
       </div>
       <button
         onClick={clearCanvas}
         className="px-4 py-2 text-sm text-red-600 hover:text-red-700 font-semibold rounded-lg transition-colors"
       >
         Clear
       </button>
     </div>
     <div className="relative overflow-hidden border border-gray-200 rounded-lg bg-white">
       <canvas
         ref={canvasRef}
         style={{
           width: '100%',
           height: '600px',
           cursor: tool === 'pen' ? 'crosshair' : 'default',
           touchAction: 'none'
         }}
         onMouseDown={startDrawing}
         onMouseMove={draw}
         onMouseUp={stopDrawing}
         onMouseOut={stopDrawing}
         onTouchStart={startDrawing}
         onTouchMove={draw}
         onTouchEnd={stopDrawing}
       />
     </div>
   </div>
 );
};

export default Whiteboard;