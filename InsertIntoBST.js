
//Leetcode october challenge day 6
//Author : Smita Krushna Patil
//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

/*
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
   //var node=this.root;
   if(root==null)
   {
       return new TreeNode(val);
   }
   else
   {
           if(root.val< val)
              {
                 
                   if(root.right!=null)
                      {
                          insertIntoBST(root.right, val);
                            
                      }
                    else
                    {
                           root.right=new TreeNode(val);
                            return root;   
                    }
                  
              }
            else if(root.val > val)
           {
               
               if(root.left!=null)
               {
                       insertIntoBST(root.left, val);
               }
               else
                {
                       root.left=new TreeNode(val);
                        return root;
                 }
 
            }

   }
    return root;
 
};